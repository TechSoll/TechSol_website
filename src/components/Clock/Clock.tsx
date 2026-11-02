import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './Clock.css'

interface DateTimeResponse {
  server: {
    utc: {
      date: string
      time: string
      datetime: string
      timezone: string
    }
    local: {
      date: string
      time: string
      datetime: string
      timezone: string
    }
  }
  database: {
    datetime: string
    timezone: string
  }
}

const Clock: React.FC = () => {
  const [timeData, setTimeData] = useState<DateTimeResponse | null>(null)
  const [displayTime, setDisplayTime] = useState<Date | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastSynced, setLastSynced] = useState<Date | null>(null)

  const fetchDateTime = useCallback(async () => {
    try {
      const response = await axios.get<DateTimeResponse>(
        'https://python-app-vwnm.onrender.com/datetime'
      )
      setTimeData(response.data)
      setDisplayTime(new Date(response.data.server.utc.datetime))
      setLastSynced(new Date())
      setError(false)
      setLoading(false)
    } catch {
      setError(true)
      setLoading(false)
      // Fallback to local time on error
      if (!displayTime) {
        setDisplayTime(new Date())
      }
    }
  }, [displayTime])

  // Fetch on mount and every 60 seconds
  useEffect(() => {
    fetchDateTime()
    const syncInterval = setInterval(fetchDateTime, 60000)
    return () => clearInterval(syncInterval)
  }, [])

  // Tick every second
  useEffect(() => {
    const ticker = setInterval(() => {
      setDisplayTime(prev => {
        if (!prev) return new Date()
        return new Date(prev.getTime() + 1000)
      })
    }, 1000)
    return () => clearInterval(ticker)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const getHands = (date: Date) => {
    const hours = date.getUTCHours() % 12
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()

    const hourDeg = hours * 30 + minutes * 0.5
    const minuteDeg = minutes * 6 + seconds * 0.1
    const secondDeg = seconds * 6

    return { hourDeg, minuteDeg, secondDeg }
  }

  const { hourDeg, minuteDeg, secondDeg } = displayTime
    ? getHands(displayTime)
    : { hourDeg: 0, minuteDeg: 0, secondDeg: 0 }

  return (
    <div className="clock-widget">
      <div className="clock-glow" />

      {/* Analog Clock */}
      <div className="analog-clock">
        <svg viewBox="0 0 100 100" className="clock-svg">
          {/* Tick marks */}
          {Array.from({ length: 60 }).map((_, i) => {
            const isHour = i % 5 === 0
            const angle = (i * 6 * Math.PI) / 180
            const innerR = isHour ? 38 : 42
            const outerR = 46
            const x1 = 50 + innerR * Math.sin(angle)
            const y1 = 50 - innerR * Math.cos(angle)
            const x2 = 50 + outerR * Math.sin(angle)
            const y2 = 50 - outerR * Math.cos(angle)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isHour ? 'rgba(168,85,247,0.9)' : 'rgba(255,255,255,0.2)'}
                strokeWidth={isHour ? 1.5 : 0.5}
              />
            )
          })}

          {/* Hour hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 24 * Math.sin((hourDeg * Math.PI) / 180)}
            y2={50 - 24 * Math.cos((hourDeg * Math.PI) / 180)}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 34 * Math.sin((minuteDeg * Math.PI) / 180)}
            y2={50 - 34 * Math.cos((minuteDeg * Math.PI) / 180)}
            stroke="rgba(192,132,252,1)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1={50 - 8 * Math.sin((secondDeg * Math.PI) / 180)}
            y1={50 + 8 * Math.cos((secondDeg * Math.PI) / 180)}
            x2={50 + 38 * Math.sin((secondDeg * Math.PI) / 180)}
            y2={50 - 38 * Math.cos((secondDeg * Math.PI) / 180)}
            stroke="#f97316"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle cx="50" cy="50" r="2.5" fill="white" />
          <circle cx="50" cy="50" r="1.2" fill="#f97316" />
        </svg>
      </div>

      {/* Digital Time */}
      <div className="clock-digital">
        {loading ? (
          <span className="clock-loading">Syncing…</span>
        ) : (
          <>
            <span className="clock-time">
              {displayTime ? formatTime(displayTime) : '--:--:--'}
            </span>
            <span className="clock-date">
              {displayTime ? formatDate(displayTime) : '---'}
            </span>
            <span className="clock-tz">
              {error ? '⚠ offline' : (timeData?.server.utc.timezone ?? 'UTC')}
            </span>
          </>
        )}
      </div>

      {/* Sync indicator */}
      <div className={`clock-sync-dot ${error ? 'error' : 'ok'}`} title={
        error
          ? 'Server sync failed'
          : `Last synced: ${lastSynced?.toLocaleTimeString()}`
      } />
    </div>
  )
}

export default Clock
