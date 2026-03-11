'use client';

import { useEffect, useRef, useState } from 'react';
import { FaTaxi, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheck } from 'react-icons/fa';

export default function BookingNotification({ booking, onAccept, onClose }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Play ringtone when notification appears
    if (booking && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Audio autoplay blocked:', err);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [booking]);

  const handleAccept = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onAccept();
  };

  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Ringtone audio element */}
      <audio 
        ref={audioRef} 
        src="/ringtone.mp3" 
        loop 
      />

      {/* Notification popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-bounce">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse">
              <FaTaxi className="text-3xl text-orange-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">New Taxi Booking!</h2>
          <p className="text-white/80 text-sm mt-1">Tap to accept the ride</p>
        </div>

        {/* Booking details */}
        <div className="p-6 space-y-4">
          {/* Customer name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">
                {booking.full_name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{booking.full_name}</p>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FaPhone className="text-green-600 text-sm" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{booking.phone}</p>
              <p className="text-sm text-gray-500">Phone Number</p>
            </div>
          </div>

          {/* Pickup location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
              <FaMapMarkerAlt className="text-yellow-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Pickup</p>
              <p className="font-medium text-gray-800">{booking.pickup_location}</p>
            </div>
          </div>

          {/* Drop location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
              <FaMapMarkerAlt className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Drop</p>
              <p className="font-medium text-gray-800">{booking.drop_location}</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <FaCalendarAlt className="text-purple-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">{booking.travel_date}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <FaClock className="text-purple-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">{booking.travel_time}</span>
            </div>
          </div>

          {/* Car type */}
          <div className="bg-gray-50 rounded-lg px-4 py-2">
            <p className="text-xs text-gray-500 uppercase font-semibold">Car Type</p>
            <p className="font-medium text-gray-800 capitalize">{booking.car_type}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-4 bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <FaCheck />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

