import React from 'react'
import Degrees from './Degrees'
import Forecast from './Forecast'
import Highlights from './Highlights'
import Copypright from './Copypright'


const Right = ({ forecast, setIsMetric, dayData, handleCity }) => {
  return (
    <div className='basis-9/12 bg-slate-500 grid justify-center content-around px-40'>
      <Degrees
      setIsMetric = { setIsMetric }
      handleCity = { handleCity }
      />
      <Forecast
      forecast = { forecast }
      />
      <h2 className='place-self-center'>Highlights from today</h2>
     <Highlights
     dayData = { dayData }
     />
     <Copypright/>
    </div>
  )
}

export default Right

