import React from 'react'
import DayCard from './DayCard';
function WeeklyForecast({data}) {
    return ( <div className="my-4 flex flex-col gap-4 max-w-full p-4 justify-center items-center">
        <div className='flex flex-col w-full gap-2'>
            {data.map((day, index) => (
                <DayCard key={day.datetime || index} day={day} />
                
                ))}

        </div>
    </div> );
}

export default WeeklyForecast;