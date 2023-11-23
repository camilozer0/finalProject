import React from 'react'

const Highlights = ({ dayData, isMetric }) => {
  return (
    <div className='grid justify-around grid-cols-2 row-span-1 gap-9'>
        <div className='grid justify-items-center bg-gray-800 p-6'>
            <h2>Feels like</h2>
            <p className='text-4xl'>{ dayData.dLike } <span className='text-xl'>{ isMetric[1] }</span></p>
        </div>
        <div className='grid justify-items-center bg-gray-800 p-4'>
            <h2>Humidity</h2>
            <p className='text-4xl'>{ dayData.dHum } <span className='text-xl'>%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-slate-500 h-2.5 rounded-full" style={ {'width':  `${dayData.dHum}%` } }>
                </div>
            </div>        
        </div>
        <div className='grid justify-items-center bg-gray-800 p-4'>
            <h2>Wind speed</h2>
            <p className='text-4xl'>{ dayData.dSpeed } <span className='text-xl'> { isMetric[3]}</span> </p>
            <p>status</p>
        </div>
        <div className='grid justify-items-center bg-gray-800 p-6'>
            <h2>Wind gust</h2>
            <p className='text-4xl'>{ dayData.dGust } <span className='text-xl'> { isMetric[3] }</span></p>
        </div>
    </div>
  )
}

export default Highlights
