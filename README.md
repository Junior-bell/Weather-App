# Weather Application

A modern weather application built with React, TypeScript, and Tailwind CSS. This application allows users to search for weather information for any location and displays current weather conditions along with a 3-day forecast.

## Features

- Search for weather by city name
- Display current weather conditions
- Show 3-day weather forecast
- Responsive design with dark mode support
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- WeatherAPI.com API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-application
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your WeatherAPI.com API key:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Axios
- WeatherAPI.com API

## Project Structure

```
src/
  ├── components/
  │   ├── SearchBar.tsx
  │   └── WeatherCard.tsx
  ├── types/
  │   └── weather.ts
  ├── App.tsx
  └── main.tsx
```

## API Key

To use this application, you'll need to sign up for a free API key at [WeatherAPI.com](https://www.weatherapi.com/). The free tier includes:
- 1,000,000 calls per month
- Real-time weather
- 3-day forecasts
- Weather alerts

## Contributing

Feel free to submit issues and enhancement requests! 