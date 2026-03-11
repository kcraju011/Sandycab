# Rapido-like Booking Notification System - Implementation Plan

## Project Overview
Implement real-time booking notifications for the taxi website using Socket.IO

## Files to Create
1. `server.js` - Custom server with Socket.IO integration
2. `lib/socket.js` - Socket.IO client utility
3. `app/components/BookingNotification.jsx` - Notification popup component
4. Update `app/api/book/route.js` - Emit socket event on new booking
5. Update `app/admin/dashboard/page.js` - Listen for real-time notifications
6. Add `public/ringtone.mp3` - Ringtone sound file

## Dependencies to Install
- socket.io
- socket.io-client

## Implementation Steps
1. Install Socket.IO dependencies
2. Create custom server with Socket.IO
3. Create socket client utility
4. Update booking API to emit events
5. Add notification component with sound
6. Integrate with admin dashboard

## Expected Behavior
1. User submits booking form
2. Booking saved to database
3. Socket.IO emits 'new-booking' event
4. Admin dashboard receives event
5. Ringtone plays automatically
6. Popup shows "New Taxi Booking"
7. Notification continues until admin clicks "Accept"

