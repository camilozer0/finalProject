import { useEffect, useState } from 'react'
import './App.css'
import Left from './components/leftPane/Left'
import Right from './components/rightPane/Right'
import fetchWeather from './helpers/fetchWeather';
import fetchCity from './helpers/fetchCity';

function App() {
  //const inputVal = useRef();
  const [ city, setCity ] = useState('medellin');
  const [ weatherData, setWeatherData ] = useState(null);
  const [ iconUrl, setIconUrl ] = useState('');
  const [ forecast, setForecast ] = useState([]);
  const [ dayData, setDayData ] = useState([]);
  const [ isMetric, setIsMetric ] = useState(['metric', 'ºC']);

    let forecastFive = [];

  // Aca se ejecuta la actualizacion de la ciudad para la busqueda.
  const updateCity = (event) => {
    setCity(event.target.value);
    return city;
  }

  // Se verifica que existan los datos de tiempo para generar los datos del dia y el arreglo con los datos de los cinco dias siguientes
  useEffect(() => {
    if (weatherData) {  
      forecastFive = [];
      let {city: {name}, list: {0: {dt_txt, main: {humidity, temp, temp_max, temp_min}, weather: {0: {description, icon, main}}, wind: {deg, gust, speed}}}} = weatherData;
      let daytimeData = {
        dName: name,
        dDate: dt_txt,
        dHum: humidity,
        dTemp: temp,
        dMax: temp_max,
        dMin: temp_min,
        dDesc: description,
        dIcon: icon,
        dMain: main,
        dDeg: deg,
        dGust: gust,
        dSpeed: speed
      }
      setDayData(daytimeData);
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
    }
    setForecast(forecastFive)
  }, [weatherData])
 

  // Trae la informacion de la ciudad (en sistema metrico y sistema imperial) (falta arreglar)
  const handleCity = () => {
    console.log('handleCity', isMetric)
    fetchWeather(city, isMetric)
    .then((data) => {
      setWeatherData(data);
    })
    .catch( (er) =>  console.log(er))
  }

  const handleMetric = () => {
    setIsMetric(['metric', 'ºC']);
  }

  const handleImperial = () => {
    setIsMetric(['imperial', 'ºF']);
  }

  useEffect(() => {
    handleCity();
  }, [isMetric]);

  console.log(weatherData, dayData)
  

  // hace un useEffect que dispare la consulta cada que cambie el isMetric
  // Hacer dos posiciones y consultar dependiendo del valor de isMetric
  // Cargar estado inicial
  
  // sacar la informacion necesaria para pintar la pagina (falta arreglar)
  const getCurrentLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchCity( latitude, longitude)
        .then((cityData) => {
          setCity(cityData[0].name);
          setIsMetric(['metric', 'ºC']);
        })
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className='flex flex-row h-screen'>
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
