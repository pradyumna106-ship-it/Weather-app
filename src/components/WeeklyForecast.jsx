import React from 'react'
import DayCard from './DayCard';
function WeeklyForecast({data}) {
    return ( <div className="my-4 flex flex-col gap-2 max-w-[75%] p-4  items-center">
        <div className='flex flex-col'>
            {data.map((day, index) => (
                <DayCard key={day.datetime || index} day={day} />
                ))}

        </div>
    </div> );
}

export default WeeklyForecast;