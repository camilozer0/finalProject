const fetchWeather = async (city, isMetric) => {
    const APIKey = '4987f4aecba11093c436b04352c4924a';
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${isMetric[0]}`;
    try {
        const response = await fetch(URL);
        const infoWeather = await response.json();
        return infoWeather;
    } catch (error) {
        alert('ingrese el nombre de una ciudad valida');
    }
}

export default fetchWeather;