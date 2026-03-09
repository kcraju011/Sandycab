import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    
    const { pickup_location, drop_location, full_name } = body

    // Validate required fields
    if (!pickup_location || !drop_location || !full_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // OneSignal API configuration
    const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID
    const restApiKey = process.env.ONESIGNAL_REST_API_KEY

    if (!appId || !restApiKey) {
      console.error('OneSignal configuration missing')
      return NextResponse.json(
        { error: 'Notification service not configured' },
        { status: 500 }
      )
    }

    // Prepare notification message
    const notificationMessage = `Pickup: ${pickup_location}\nDrop: ${drop_location}\nCustomer: ${full_name}`

    // Send notification to all subscribed users (admin)
    const response = await fetch(`https://onesignal.com/api/v1/notifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${restApiKey}`,
      },
      body: JSON.stringify({
        app_id: appId,
        headings: {
          en: '🚖 New Taxi Booking',
        },
        contents: {
          en: notificationMessage,
        },
        url: 'https://sandytaxi.com/admin/dashboard',
        android_sound: 'default',
        android_vibration: true,
        ios_sound: 'default',
        ttl: 86400, // 24 hours
        priority: 10,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('OneSignal API error:', result)
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      )
    }

    console.log('Notification sent successfully:', result)

    return NextResponse.json(
      { 
        message: 'Notification sent successfully',
        notificationId: result.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Notification API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

