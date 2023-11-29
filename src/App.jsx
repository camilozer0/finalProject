import { useEffect, useState } from 'react'
import './App.css'
import Left from './components/leftPane/Left'
import Right from './components/rightPane/Right'
import fetchWeather from './helpers/fetchWeather';
import fetchCity from './helpers/fetchCity';

function App() {
  const [ city, setCity ] = useState('medellin');
  const [ weatherData, setWeatherData ] = useState(null);
  const [ iconUrl, setIconUrl ] = useState('');
  const [ forecast, setForecast ] = useState([]);
  const [ dayData, setDayData ] = useState([]);
  const [ isMetric, setIsMetric ] = useState(['metric', 'ºC', true, 'm/s']);

  //let forecastFive = [];

  // Aca se ejecuta la actualizacion de la ciudad para la busqueda.
  const updateCity = (event) => {
    setCity(event.target.value);
    return city;
  }

  // Se verifica que existan los datos de tiempo para generar los datos del dia y el arreglo con los datos de los cinco dias siguientes
  useEffect(() => {
    if (weatherData) {
      if (weatherData.cod != 404) {
      let forecastFive = [];
      let {city: {name, timezone}, list: {0: {dt_txt, main: {feels_like, humidity, temp}, weather: {0: {description, icon, main}}, wind: {deg, gust, speed}}}} = weatherData;
      let daytimeData = {
        dName: name,
        dTimezone: timezone,
        dDate: dt_txt,
        dLike: feels_like,
        dHum: humidity,
        dTemp: temp,
        dDesc: description,
        dIcon: icon,
        dMain: main,
        dDeg: deg,
        dGust: gust,
        dSpeed: speed
      }
      setDayData(daytimeData);
      console.log(daytimeData)
      setIconUrl(`https://openweathermap.org/img/wn/${icon}@4x.png`);
      for (let i = 7; i <= weatherData.list.length; i = i + 8) {
        let forecastTemp = {
          fDate: '',
          fIcon: '',
          fMax: '',
          fMin: '',
          fDesc: '',
          fHum: ''
        };
        let {dt_txt, main: {humidity, temp}, weather: {0: {description, icon}}} = weatherData.list[i];
        forecastTemp.fDate = dt_txt;
        forecastTemp.fIcon = icon;
        forecastTemp.fTemp = temp;
        forecastTemp.fDesc = description;
        forecastTemp.fHum = humidity;
        forecastFive.push(forecastTemp);
      }
      setForecast(forecastFive)
    } else {
      alert('digite una ciudad valida')
    }
  }  
  }, [weatherData])

  // Trae la informacion de la ciudad (en sistema metrico y sistema imperial)
  const handleCity = () => {
    fetchWeather(city, isMetric)
    .then((data) => {
      setWeatherData(data);
    })
    .catch( (er) =>  console.log(er))
  }

  // Actualiza el sistema de medidas en el cual se muestran los datos
  const handleMetric = () => {
    setIsMetric(['metric', 'ºC', true, 'm/s']);
  }

  const handleImperial = () => {
    setIsMetric(['imperial', 'ºF', false, 'mph']);
  }

  // Se ejecuta cada vez que cambian las unidades de medida
  useEffect(() => {
    handleCity();
  }, [isMetric]);

  
  // sacar la informacion necesaria para pintar la pagina (falta arreglar)
  const getCurrentLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchCity( latitude, longitude)
        .then((cityData) => {
          setCity(cityData[0].name);
          setIsMetric(['metric', 'ºC', true, 'm/s']);
        })
        //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className='grid sm:flex sm:flex-row lg:h-screen'>
      <Left 
      handleCity = { handleCity }
      updateCity = { updateCity }
      city = { city }
      iconUrl = { iconUrl }
      dayData = { dayData }
      getCurrentLoc = { getCurrentLoc }
      isMetric = { isMetric }
      />
      <Right
      forecast = { forecast }
      dayData = { dayData }
      handleMetric = { handleMetric }
      handleImperial = { handleImperial }
      isMetric = { isMetric }
      />
    </div>
  )
}

export default App
