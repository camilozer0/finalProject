import React from 'react'

const WeatherInfo = ({ dayData }) => {
  
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  const todayDate = new Date();
  const utcHours = todayDate.getUTCHours();
  const utcMin = todayDate.getMinutes();
  const utcSec = todayDate.getUTCSeconds();
  const cityHours = utcHours + (dayData.dTimezone / 3600);
  const cityTime = `${cityHours}:${utcMin}:${utcSec}`;
  console.log(utcHours);
  const tDate = todayDate.toLocaleString("en-US", options);
  return (
    <div className='grid justify-center m-2 sm:m-0'>    
        <p> Today * { (dayData) && tDate } </p>    
        <p className='justify-self-center'> { (dayData) && cityTime } </p>    
    </div>
  )
}

export default WeatherInfo
