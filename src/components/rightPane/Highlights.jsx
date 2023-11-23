import React from 'react'

const Highlights = ({ dayData, isMetric }) => {
  return (
    <div className='grid justify-around grid-cols-2 row-span-1 gap-9'>
        <div className='grid justify-items-center bg-gray-800 p-6'>
            <h2>feels like</h2>
            <p className='text-4xl'>{ dayData.dLike } { isMetric[1] }</p>
        </div>
        <div className='grid justify-items-center bg-gray-800 p-4'>
            <h2>Humidity</h2>
            <p className='text-4xl'>{ dayData.dHum }%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-slate-500 h-2.5 rounded-full" style={ {'width':  `${dayData.dHum}%` } }>
                </div>
            </div>        
        </div>
        <div className='grid justify-items-center bg-gray-800 p-4'>
            <h2>wind status</h2>
            <p className='text-4xl'>{ dayData.dSpeed }mph</p>
            <p>status</p>
        </div>
        <div className='grid justify-items-center bg-gray-800 p-6'>
            <h2>Gust</h2>
            <p className='text-4xl'>{ dayData.dGust } miles</p>
        </div>
    </div>
  )
}

export default Highlights
