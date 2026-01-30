import React,{useState,useEffect} from 'react'
import { weather } from '../service/weatherapi';
import CurrentWeather from './CurrentWeather';
import SesrchBar from './SesrchBar';
import WeeklyForecast from './WeeklyForecast';
import HourlyForecast from './HourlyForecast';
import { DiVisualstudio } from 'react-icons/di';
function Forcast() {
    const [city, setCity] = useState('')
    const [forecast,setForecast] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    useEffect(() => {
        const loadForecast = async() => {
            setLoading(true);
            if (!city.trim()) {
                setError('Enter city name');
                return;
            }
        const res = await weather(city);
        setForecast(res);
        }
        loadForecast()
    },[city]);
    const days = forecast?.days;
    const today = days ? days[0] :null;
    const getWeatherBg = (condition) => {
        switch (condition?.toLowerCase()) {
            case 'clear':
                return 'bg-gradient-to-br from-yellow-400/20 via-blue-500/30 to-purple-600/40';
            case 'partially cloudy':
            case 'partly cloudy':
                return 'bg-gradient-to-br from-orange-400/20 via-yellow-500/20 to-blue-600/40';
            case 'rain':
            case 'rainy':
                return 'bg-gradient-to-br from-blue-600/40 via-indigo-600/50 to-gray-800/60';
            case 'cloudy':
                return 'bg-gradient-to-br from-gray-500/30 via-gray-600/40 to-gray-800/60';
            case 'thunderstorm':
                return 'bg-gradient-to-br from-purple-700/50 via-indigo-800/60 to-gray-900/70';
            default:
                return 'bg-gradient-to-br from-gray-500/20 to-blue-600/40';
            }
        };
    const bgClass = today ? getWeatherBg(today.conditions) : 'bg-gradient-to-br from-gray-500/20 to-blue-600/40';
    
    console.log(forecast);
    return (<div className={`flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-6 min-h-screen ${bgClass} `}>
        <SesrchBar onSearch={(value) => setCity(value)} />
        {loading && <p>.....</p>}
        {error && <p>{error}</p>}
        {days?.length > 0 && (
        <div>
            <CurrentWeather data={days[0]} location={forecast.resolvedAddress} />
            <HourlyForecast data={days[0].hours} />
            <WeeklyForecast data={days.slice(1)} />
        </div>
        )}

    </div>);
}

export default Forcast;