'use client'

import { useEffect, useRef } from 'react'
import OneSignal from 'react-onesignal'

export default function OneSignalInit() {
  const initialized = useRef(false)

  useEffect(() => {
    // Prevent multiple initialization attempts
    if (initialized.current) {
      return
    }
    initialized.current = true

    const initOneSignal = async () => {
      try {
        // Check if OneSignal is already initialized
        if (OneSignal.isInitialized) {
          console.log('OneSignal already initialized')
          return
        }

        await OneSignal.init({
          appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
          allowLocalhostAsSecureOrigin: true,
          welcomeNotification: {
            disable: true,
          },
        })
        
        console.log('OneSignal initialized successfully')
      } catch (error) {
        // Ignore "already initialized" errors
        if (error.message && error.message.includes('already initialized')) {
          console.log('OneSignal already initialized')
          return
        }
        console.error('OneSignal initialization error:', error)
      }
    }

    initOneSignal()
  }, [])

  return null
}

