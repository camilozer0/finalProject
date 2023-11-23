import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const CurrLoc = ({ dayData }) => {
  return (
    <div className='flex justify-center gap-3 text-xl py-1'>
      <IoLocationSharp/>
      <p>{ dayData.dName }</p>
    </div>
  )
}

export default CurrLoc
