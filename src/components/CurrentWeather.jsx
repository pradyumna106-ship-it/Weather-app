import React from "react";
import {parse} from 'date-fns';

import { WiDaySunny, WiNightClear, WiDayCloudy, WiRain, WiDayRainMix } from 'react-icons/wi';

const getDayAndHHMM = (rawdata) => {
        const date = new Date(rawdata + 'T00:00:00'); // Add time for valid date
        return date.toLocaleDateString('en-IN', {
            weekday: 'long',    // Friday
            hour: 'numeric',    // 12
            minute: '2-digit',  // 19
            hour12: true        // PM
        });
}
function CurrentWeather({data,location}) {
    const name = location;
    const temp = data.temp || 'N/A';
    const conditions = data.conditions || 'Unknown';
    const tempmax = data.tempmax || 'N/A';
    const tempmin = data.tempmin || 'N/A';
    const feelslike = data.feelslike || 'N/A';
    const description = data.description || 'N/A';
    const windspeed = data.windspeed || 'N/A';
    const humidity = data.humidity || 'N/A';
    const uvindex = data.uvindex || 'N/A';
    const pressure = data.pressure || 'N/A';
    const datetime = data.datetime || 'N/A';
    const icon = data.icon || 'N/A';
    
    if (!data) {
        return <div className="text-center p-8 text-white bg-gray-800 rounded-3xl">No current weather data</div>;
    }
    if (!data) return <div className="text-center p-8">Loading...</div>;
    const getTempBg = (temp) => {
        if (temp > 35) return 'from-orange-500/30 to-red-500/40';      // Hot 🔥
        if (temp > 25) return 'from-yellow-400/30 to-orange-500/40';   // Warm ☀️
        if (temp > 15) return 'from-blue-400/30 to-indigo-500/40';     // Cool ❄️
        return 'from-blue-600/40 to-purple-700/50';                    // Cold 🥶
        };
    const getWeatherIcon = (condition, icon) => {
  // Use icon first (more precise), fallback to condition
        if (icon?.includes('clear-day') || condition === 'Clear') {
            return <WiDaySunny className="text-6xl mb-2"/>;  // ☀️ Sunny day
        }
        if (icon?.includes('clear-night')) {
            return <WiNightClear className="text-6xl mb-2" />;  // 🌙 Clear night
        }
        if (icon?.includes('partly-cloudy-day') || condition === 'Partially cloudy') {
            return <WiDayCloudy className="text-6xl mb-2" />;  // ⛅ Partly cloudy
        }
        if (condition === 'Rain') {
            return <WiRain className="text-6xl mb-2"  />;  // 🌧️ Rain
        }
        // Default fallback
        return <WiDaySunny className="text-6xl mb-2" />;
    }
    const Icon = getWeatherIcon(conditions, data.icon);
    return (<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-6  items-center">
            <div className={`lg:col-span-2 bg-gradient-to-br ${getTempBg(temp)} backdrop-blur-xl rounded-3xl p-8 text-white`}>
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">{name}</h2>
                    <h1 className="text-6xl lg:text-7xl font-black mb-4">{Math.round(temp)}°</h1>
                    <p className="text-2xl font-semibold mb-4">
                        ⬆{Math.round(tempmax)}°C / ⬇{Math.round(tempmin)}°C
                    </p>
                    <p className="text-lg opacity-90 mb-1">Feels like {feelslike}</p>
                    <p className="text-lg opacity-90 mb-2">{getDayAndHHMM(datetime)}</p>
                    <small className="opacity-75">{description}</small>
                </div>
                <div className="text-center">
                    <p className="text-xl font-semibold mb-2 capitalize">{conditions}</p>  {/* "Clear" */}
                    <p className="opacity-75">{icon}</p>
                        {Icon}
                </div>
            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 text-white border border-white/20">
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                        <span className="text-gray-200">🍃 Wind</span>
                        <span className="font-semibold">{windspeed} km/h</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                        <span className="text-gray-200">💧 Humidity</span>
                        <span className="font-semibold">{humidity}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                        <span className="text-gray-200">☀️ UV Index</span>
                        <span className="font-semibold">{uvindex}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                        <span className="text-gray-200">🌡️ Pressure</span>
                        <span className="font-semibold">{pressure} hPa</span>
                    </div>
                    </div>
            </div>
    </div>
    </div>);
}

export default CurrentWeather;