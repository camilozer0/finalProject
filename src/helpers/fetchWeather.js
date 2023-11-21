const fetchWeather = async (city, isMetric) => {
    const APIKey = '4987f4aecba11093c436b04352c4924a';
    //const cityName = 'medellin';
    //const URLCurrent = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIKey}`;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${isMetric}`;
    const response = await fetch(URL);
    const infoWeather = await response.json();
    return infoWeather;
}

export default fetchWeather;