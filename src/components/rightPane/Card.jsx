import React from 'react'

const Card = ({ forecastDate, forecastIcon, forecastTemp, forecastDesc, forecastHum, isMetric  }) => {
  const forecastIc = `https://openweathermap.org/img/wn/${forecastIcon}@4x.png`;
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  const forecastDa = forecastDate.slice(0,10);
  const dateF = new Date(forecastDa);
  const dateLast = dateF.toLocaleString("en-US", options);
  return (
    <div className='grid justify-items-center bg-gray-800 p-3'>
        <p>{ dateLast }</p>
        <img src={ forecastIc } alt="this is a kitten" />
        <p>{ forecastDesc }</p>
        <div className='grid justify-center'>
            <p className='grid justify-center'>{forecastTemp.toFixed(0) } { isMetric[1] }</p>
            <p className='grid justify-center'>{ forecastHum }% hum</p>
        </div>
    </div>
  )
}

export default Card
