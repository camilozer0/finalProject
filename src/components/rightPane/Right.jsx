import React from 'react'
import Degrees from './Degrees'
import Forecast from './Forecast'
import Highlights from './Highlights'
import Copypright from './Copypright'


const Right = ({ forecast, dayData, handleMetric, handleImperial, isMetric }) => {
  return (
    <div className='basis-9/12 bg-slate-500 grid justify-center content-around px-40'>
      <Degrees
      handleMetric = { handleMetric }
      handleImperial = { handleImperial }
      />
      <Forecast
      forecast = { forecast }
      isMetric = { isMetric }
      />
      <h2 className='place-self-center'>Highlights from today</h2>
     <Highlights
     dayData = { dayData }
     isMetric = { isMetric }
     />
     <Copypright/>
    </div>
  )
}

export default Right

