import React from 'react'
import Degrees from './Degrees'
import Forecast from './Forecast'
import Highlights from './Highlights'
import Copypright from './Copypright'


const Right = ({ forecast, dayData, handleMetric, handleImperial, isMetric }) => {
  return (
    <div className='basis-9/12 bg-slate-500 grid justify-center content-around px-6 sm:px-6 md:px-10 lg:px-12'>
      <Degrees
      handleMetric = { handleMetric }
      handleImperial = { handleImperial }
      isMetric = { isMetric[2] }
      />
      <Forecast
      forecast = { forecast }
      isMetric = { isMetric }
      />
      <h2 className='place-self-center text-xl font-normal py-6 sm:p-0'>Highlights from today</h2>
     <Highlights
     dayData = { dayData }
     isMetric = { isMetric }
     />
     <Copypright/>
    </div>
  )
}

export default Right

