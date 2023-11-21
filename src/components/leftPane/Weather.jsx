import React from 'react'

const Weather = ({ dayData }) => {
  return (
    <div className='grid justify-center'>
      { (dayData) && <h2 className='text-6xl'>{ dayData[2] } ºC</h2> }
      <br /><br /><br />
      <h2 className='text-2xl'>{ (dayData) && dayData[6] } </h2>
    </div>
  )
}

export default Weather
