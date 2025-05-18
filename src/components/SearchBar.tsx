import React, { useState } from 'react'
import axios from 'axios'
import { WeatherData } from '../types/weather'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

interface SearchBarProps {
  setWeatherData: (data: WeatherData) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

const SearchBar = ({ setWeatherData, setLoading, setError }: SearchBarProps) => {
  const [location, setLocation] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!location.trim()) {
      setError('Please enter a location')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location}&days=3&aqi=no`
      )
      setWeatherData(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError('Location not found. Please check the spelling and try again.')
        } else if (error.response?.status === 401) {
          setError('API key is invalid. Please check your configuration.')
        } else if (error.response?.status === 429) {
          setError('Too many requests. Please try again later.')
        } else {
          setError('Failed to fetch weather data. Please try again.')
        }
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

export default SearchBar 