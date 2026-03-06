import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

