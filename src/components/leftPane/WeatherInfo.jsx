import React, { useEffect, useState } from 'react'

const WeatherInfo = ({ dayData }) => {
  const [cityTime, setCityTime ] = useState('')
  
  const todayDate = new Date();

  useEffect(() => {
  let utcHours = todayDate.getUTCHours();
  const utcMin = todayDate.getMinutes();
  const utcSec = todayDate.getUTCSeconds();
  let cityHours = utcHours + (dayData.dTimezone / 3600);
  if (cityHours >= 24) cityHours = 0;
  setCityTime(`${cityHours}:${utcMin}`);
    }, [todayDate])
  
  
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };

  
  const tDate = todayDate.toLocaleString("en-US", options);
  return (
    <div className='grid justify-center m-2 sm:m-0'>    
        <p> Today * { (dayData) && tDate } </p>    
        <p className='justify-self-center'> At { (dayData) && cityTime } </p>    
    </div>
  )
}

export default WeatherInfo
