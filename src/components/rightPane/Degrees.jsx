import { isMoment } from 'moment/moment'
import React, { useEffect } from 'react'

const Degrees = ({ handleMetric, handleImperial, isMetric }) => {

  return (
    <div className='flex justify-end gap-2'>
      <button onClick={ handleMetric } value='deg' className={isMetric ? 'bg-gray-400 h-10 px-3 font-semibold rounded-full border border-slate-200 text-black' : 'h-10 px-3 font-semibold rounded-full border border-slate-200 bg-black' }>ºC</button> 
      <button onClick={ handleImperial } value='far' className={!isMetric ? 'bg-gray-400 h-10 px-3 font-semibold rounded-full border border-slate-200 text-black' : 'h-10 px-3 font-semibold rounded-full border border-slate-200 bg-black' }>ºF</button>
    </div>
  )
}

export default Degrees;
