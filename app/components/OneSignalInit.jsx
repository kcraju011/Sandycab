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
      // Get App ID from environment
      const appId = 'f0db1e2b-07a1-4253-b033-73e04187f56e';
      
      console.log('OneSignal App ID:', appId)
      
      if (!appId) {
        console.error('OneSignal App ID not found in environment variables')
        return
      }

      try {
        // Check if OneSignal is already initialized
        if (OneSignal.isInitialized) {
          console.log('OneSignal already initialized')
          return
        }

        await OneSignal.init({
          appId: appId,
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

