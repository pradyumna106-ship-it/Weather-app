import React from 'react';
import HourCard from './HourCard';
function HourlyForecast({data}) {
    return (<div className=" flex max-w-200 gap-4 p-4 rounded-2xl  items-center">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory">
            {data.map((hour, index) => (
                <HourCard key={index} hour={hour} />
                ))}
        </div>
    </div>);
}

export default HourlyForecast;