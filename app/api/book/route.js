import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Socket.IO client for emitting events to the socket server
let socketClient = null;

const getSocketClient = async () => {
  if (!socketClient) {
    const { Server } = await import('socket.io');
    const http = await import('http');
    const socketIo = await import('socket.io-client');
    
    // Connect to the socket server
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';
    socketClient = socketIo.io(socketUrl, {
      transports: ['websocket', 'polling'],
      reconnection: true,
    });
  }
  return socketClient;
};

export async function POST(request) {
  try {
    const body = await request.json()
    
    const { full_name, phone, pickup_location, drop_location, travel_date, travel_time, car_type } = body

    // Validate required fields
    if (!full_name || !phone || !pickup_location || !drop_location || !travel_date || !travel_time || !car_type) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Insert booking data into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          full_name,
          phone,
          pickup_location,
          drop_location,
          travel_date,
          travel_time,
          car_type,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to create booking. Please try again.' },
        { status: 500 }
      )
    }

    // Emit socket event for real-time notification
    try {
      const socket = await getSocketClient();
      
      // Prepare booking data for notification
      const notificationData = {
        id: data[0]?.id,
        full_name,
        phone,
        pickup_location,
        drop_location,
        travel_date,
        travel_time,
        car_type,
        created_at: new Date().toISOString(),
      };

      // Emit to socket server which will broadcast to admin
      socket.emit('newBooking', notificationData);
      console.log('New booking notification sent:', notificationData);
    } catch (socketError) {
      console.error('Socket emit error:', socketError);
      // Don't fail the booking if socket emission fails
    }

    // Send push notification to admin via OneSignal
    try {
      const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
      const restApiKey = process.env.ONESIGNAL_REST_API_KEY;
      
      if (appId && restApiKey) {
        const notificationMessage = `Pickup: ${pickup_location}\nDrop: ${drop_location}\nCustomer: ${full_name}`;
        
        await fetch('https://onesignal.com/api/v1/notifications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${restApiKey}`,
          },
          body: JSON.stringify({
            app_id: appId,
            headings: { en: '🚖 New Taxi Booking' },
            contents: { en: notificationMessage },
            url: 'https://sandytaxi.com/admin/dashboard',
            android_sound: 'default',
            android_vibration: true,
            ios_sound: 'default',
            ttl: 86400,
            priority: 10,
          }),
        });
        console.log('OneSignal push notification sent');
      }
    } catch (notificationError) {
      console.error('OneSignal notification error:', notificationError);
    }

    return NextResponse.json(
      { 
        message: 'Booking created successfully!',
        booking: data[0]
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

