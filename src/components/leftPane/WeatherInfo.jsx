import React, { useEffect, useState } from 'react'

const WeatherInfo = ({ dayData }) => {
  const [cityTime, setCityTime ] = useState('')
  
  const todayDate = new Date();

  useEffect(() => {
  const utcHours = todayDate.getUTCHours();
  const utcMin = todayDate.getMinutes();
  const utcSec = todayDate.getUTCSeconds();
  const cityHours = utcHours + (dayData.dTimezone / 3600);
  setCityTime(`${cityHours}:${utcMin}:${utcSec}`);
  console.log(utcHours);
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
