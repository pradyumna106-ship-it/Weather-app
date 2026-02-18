import axios from 'axios';
const api = axios.create({
  baseURL: "https://weather-api-production-f78d.up.railway.app"
});

export const weather = async(city) => {
    try{
        const { data } = await api.get(`/weather/${city}`)  // Proxy works!
        return data;
    } catch(e) {
        console.error(e);
    }
}