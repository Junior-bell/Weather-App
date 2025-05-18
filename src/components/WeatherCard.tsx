import { WeatherData } from '../types/weather'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Droplets, Wind } from 'lucide-react'

interface WeatherCardProps {
  weatherData: WeatherData
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const { location, current, forecast } = weatherData

  return (
    <div className="mt-8 space-y-6">
      {/* Current Weather */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">
                {location.name}, {location.country}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {new Date(location.localtime).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <img
                src={current.condition.icon}
                alt={current.condition.text}
                className="w-16 h-16"
              />
              <p className="text-sm text-muted-foreground">
                {current.condition.text}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-5xl font-bold">
                {current.temp_c}°C
              </p>
              <p className="text-sm text-muted-foreground">
                Feels like {current.feelslike_c}°C
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Wind</p>
                  <p className="font-semibold">
                    {current.wind_kph} km/h
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="font-semibold">
                    {current.humidity}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecast.forecastday.map((day) => (
          <Card key={day.date}>
            <CardHeader>
              <CardTitle className="text-lg">
                {new Date(day.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">
                    {day.day.maxtemp_c}°C
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {day.day.mintemp_c}°C
                  </p>
                </div>
                <div className="text-right">
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    className="w-12 h-12"
                  />
                  <p className="text-sm text-muted-foreground">
                    {day.day.condition.text}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WeatherCard 