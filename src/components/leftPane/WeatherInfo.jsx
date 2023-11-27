import React from 'react'

const WeatherInfo = ({ dayData }) => {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  const todayDate = new Date();
  const tDate = todayDate.toLocaleString("en-US", options);
  return (
    <div className='grid justify-center m-2 sm:m-0'>    
        <p> Today * { (dayData) && tDate } </p>    
    </div>
  )
}

export default WeatherInfo
