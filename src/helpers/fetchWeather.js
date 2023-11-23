const fetchWeather = async (city, isMetric) => {
    const APIKey = '4987f4aecba11093c436b04352c4924a';
    //const URLCurrent = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIKey}`;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${isMetric[0]}`;
    const response = await fetch(URL);
    if (!response.ok) {
        alert('Introduzca un nombre de ciudad valido');
    }
    const infoWeather = await response.json();
    return infoWeather;
}

export default fetchWeather;