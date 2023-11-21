import React from 'react'

const Degrees = ({ setIsMetric, handleCity }) => {
  return (
    <div className='flex justify-end gap-2'>
      <button onClick={ handleCity } value='deg' className='h-10 px-3 font-semibold rounded-full border bg-black border-slate-200 text-white'>ºC</button> 
      <button onClick={ handleCity } value='far' className='h-10 px-3 font-semibold rounded-full border bg-black border-slate-200 text-white'>ºF</button>
    </div>
  )
}

export default Degrees
