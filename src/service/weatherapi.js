import axios from 'axios';
export const weather = async(city) => {
    try{
        const { data } = await axios.get(`https://weather-api-production-f78d.up.railway.app/weather/london/weather/${city}`);  // Proxy works!
        return data;
    } catch(e) {
        console.error(e);
    }
}