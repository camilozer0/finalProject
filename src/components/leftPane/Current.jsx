import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'

const Current = ({getCurrentLoc}) => {
  return (
    <div>
        <button onClick={ getCurrentLoc }><BiCurrentLocation/></button>
    </div>
  )
}

export default Current
