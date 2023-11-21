import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const CurrLoc = ({ city }) => {
  return (
    <div className='flex justify-center gap-3'>
      <IoLocationSharp/>
      <p>{ city }</p>
    </div>
  )
}

export default CurrLoc