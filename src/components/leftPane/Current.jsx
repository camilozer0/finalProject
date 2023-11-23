import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'

const Current = ({getCurrentLoc}) => {
  return (
    <div className='bg-slate-600 grid rounded-full px-1'>
        <button 
        onClick={ getCurrentLoc }
        className='text-2xl'
        ><BiCurrentLocation/></button>
    </div>
  )
}

export default Current
