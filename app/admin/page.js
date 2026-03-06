'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in')
    if (isLoggedIn === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'sandy123'

    if (password === correctPassword) {
      localStorage.setItem('admin_logged_in', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Sandy<span className="text-yellow-400">Taxi</span>
          </h1>
          <p className="text-slate-400 mt-2">Admin Dashboard</p>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          Authorized personnel only
        </p>
      </div>
    </div>
  )
}

