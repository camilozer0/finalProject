import React from 'react'

const WeatherInfo = ({ dayData }) => {
  const todayDate = new Date().toDateString();
  return (
    <div className='grid justify-center'>    
        <p>{ (dayData) && dayData[1] && todayDate } </p>    
    </div>
  )
}

export default WeatherInfo
