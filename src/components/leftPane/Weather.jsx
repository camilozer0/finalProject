import React from 'react'

const Weather = ({ dayData, isMetric }) => {
  return (
    <div className='grid justify-center'>
      { (dayData) && <h2 className='text-2xl flex place-content-center py-2'> <span className='text-7xl italic font-medium'>{ dayData.dTemp }</span> &nbsp; { isMetric[1] }</h2> }
      <br /><br />
      <h2 className='text-4xl flex place-content-center'>{ (dayData) && dayData.dDesc } </h2>
    </div>
  )
}

export default Weather
