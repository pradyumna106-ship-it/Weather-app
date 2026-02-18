import axios from 'axios';
export const weather = async(city) => {
    try{
        const { data } = await axios.get(`/weather/${city}`);  // Proxy works!
        return data;
    } catch(e) {
        console.error(e);
    }
}