import { isMoment } from 'moment/moment'
import React, { useEffect } from 'react'

const Degrees = ({ handleMetric, handleImperial }) => {

  return (
    <div className='flex justify-end gap-2'>
      <button onClick={ handleMetric } value='deg' className='h-10 px-3 font-semibold rounded-full border bg-black border-slate-200 text-white'>ºC</button> 
      <button onClick={ handleImperial } value='far' className='h-10 px-3 font-semibold rounded-full border bg-black border-slate-200 text-white'>ºF</button>
    </div>
  )
}

export default Degrees
