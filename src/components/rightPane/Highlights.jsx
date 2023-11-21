import React from 'react'

const Highlights = ({ dayData }) => {
  return (
    <div className='grid justify-around grid-cols-2 row-span-1 gap-9'>
        <div className='grid justify-center bg-gray-800 p-4'>
            <h2>wind status</h2>
            <p className='text-4xl'>{ dayData[11] }mph</p>
            <p>status</p>
        </div>
        <div className='grid justify-center bg-gray-800 p-4'>
            <h2>Humidity</h2>
            <p className='text-4xl'>{ dayData[2] }%</p>
            <p>barra</p>
        </div>
        <div className='grid justify-center bg-gray-800 p-6'>
            <h2>Gust</h2>
            <p className='text-4xl'>{ dayData[10] } miles</p>
        </div>
        <div className='grid justify-center bg-gray-800 p-6'>
            <h2>Air presure</h2>
            <p className='text-4xl'>{ dayData[8] } mb</p>
        </div>
    </div>
  )
}

export default Highlights
