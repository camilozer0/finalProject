import { useEffect, useState } from 'react'
import './App.css'
import Left from './components/leftPane/Left'
import Right from './components/rightPane/Right'
import fetchWeather from './helpers/fetchWeather';

function App() {
  //const inputVal = useRef();
  const [ city, setCity ] = useState('');
  const [ weatherData, setWeatherData ] = useState(null);
  const [ iconUrl, setIconUrl ] = useState('');
  const [ forecast, setForecast ] = useState([]);
  const [ dayData, setDayData ] = useState([]);
  const [ isMetric, setIsMetric ] = useState('metric');

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
      setDayData([name, dt_txt, humidity, temp, temp_max, temp_min, description, icon, main, deg, gust, speed]);
      setIconUrl(`https://openweathermap.org/img/wn/${icon}@4x.png`);
      for (let i = 7; i <= weatherData.list.length; i = i + 8) {
        let forecastTemp = {
          fDate: '',
          fIcon: '',
          fTemp: '',
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
    if (event.target.value === 'deg') {
      setIsMetric('metric')
    } else if (event.target.value === 'far') {
      setIsMetric('imperial')
    }
    fetchWeather(city, isMetric)
    .then((data) => {
      setWeatherData(data);
    })
    .catch( (er) =>  console.log(er))
  }

  // hace un useEffect que dispare la consulta cada que cambie el isMetric
  // Hacer dos posiciones y consultar dependiendo del valor de isMetric
  // Cargar estado inicial
  
  // sacar la informacion necesaria para pintar la pagina (falta arreglar)
  const getCurrentLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
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
      />
      <Right
      forecast = { forecast }
      setIsMetric = { setIsMetric }
      dayData = { dayData }
      handleCity = { handleCity }
      />
    </div>
  )
}

export default App
