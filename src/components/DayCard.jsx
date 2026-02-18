import React from 'react'
import { format } from 'date-fns';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiRain, WiDayRainMix } from 'react-icons/wi';
export default function DayCard({day}) {
    const getWeatherIcon = (condition, icon) => {
          // Use icon first (more precise), fallback to condition
                if (icon?.includes('clear-day') || condition === 'Clear') {
                    return <WiDaySunny/>;  // ☀️ Sunny day
                }
                if (icon?.includes('clear-night')) {
                    return <WiNightClear/>;  // 🌙 Clear night
                }
                if (icon?.includes('partly-cloudy-day') || condition === 'Partially cloudy') {
                    return <WiDayCloudy/>;  // ⛅ Partly cloudy
                }
                if (condition === 'Rain') {
                    return <WiRain/>;  // 🌧️ Rain
                }
                // Default fallback
                return <WiDaySunny/>;
            }
            if (!day) return null;
    return(
        <div className="flex justify-between px-4 py-3 bg-white/5 rounded-xl backdrop-blur-[6px] text-[#f1f1f1] text-[0.95rem]">
            <div className="flex-[2]">
            {day?.datetime
                ? format(new Date(day.datetime), "EEE")
                : "--"}
            </div>
            <div className="flex items-center flex-1 gap-2">
                {getWeatherIcon(day.conditions,day.icon)}
                <span className="text-[0.85rem]">{day.conditions}</span>
            </div>
            <div className="flex-1">{Math.round(day.temp)}°C</div>
            <div className="flex-1">💧 {day.precipprob}%</div>
        </div>
)}