import React from 'react'
import { format,parse } from 'date-fns';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiRain, WiDayRainMix } from 'react-icons/wi';
export default function HourCard({hour}) {
    const getHourBg = (temp) => {
        if (temp > 30) return 'from-orange-400/20 to-red-400/30';
        if (temp > 20) return 'from-blue-400/20 to-indigo-400/30';
        return 'from-gray-400/20 to-blue-500/30';
        };
    const getWeatherIcon = (condition, icon) => {
      // Use icon first (more precise), fallback to condition
            if (icon?.includes('clear-day') || condition === 'Clear') {
                return <WiDaySunny className="w-[100px]"/>;  // ☀️ Sunny day
            }
            if (icon?.includes('clear-night')) {
                return <WiNightClear className="w-[100px]"/>;  // 🌙 Clear night
            }
            if (icon?.includes('partly-cloudy-day') || condition === 'Partially cloudy') {
                return <WiDayCloudy className="w-[100px]"/>;  // ⛅ Partly cloudy
            }
            if (condition === 'Rain') {
                return <WiRain className="w-[100px]"/>;  // 🌧️ Rain
            }
            // Default fallback
            return <WiDaySunny className="w-[100px]"/>;
        }
        if (!hour) return null;
    return(
        <div className={`min-w-[80px] flex-shrink-0 p-3 text-center bg-gradient-to-b ${getHourBg(hour.temp)} rounded-2xl backdrop-blur-xl shadow-lg`}>
            <div className="text-xs font-semibold text-gray-100 mb-2 tracking-wide">
                {hour?.datetime && format(parse(hour.datetime, "HH:mm:ss", new Date()), "h a")}
            </div>
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                {getWeatherIcon(hour.conditions, hour.icon)}
            </div>
            <div className="text-[0.9rem]  text-gray-100">{Math.round(hour.temp)}°C</div>
            <div className="text-[0.9rem]  text-gray-100">💧 {hour.precipprob}%</div>
        </div>
    )
}
