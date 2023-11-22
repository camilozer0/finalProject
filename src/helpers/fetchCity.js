const fetchCity = async (lat, lon) => {
    const APIKey = '4987f4aecba11093c436b04352c4924a';
    const URLcity = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`
    //const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${isMetric[0]}`;
    const response = await fetch(URLcity);
    const infoCity = await response.json();
    return infoCity;
}

export default fetchCity;