import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import { WeatherData } from './types/weather'
import { Sun } from 'lucide-react'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sun className="h-8 w-8 text-yellow-500" />
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Weather Forecast
          </h1>
        </div>
        <SearchBar 
          setWeatherData={setWeatherData} 
          setLoading={setLoading} 
          setError={setError} 
        />
        {loading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}
        {error && (
          <div className="text-center mt-8 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            {error}
          </div>
        )}
        {weatherData && !loading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  )
}

export default App 