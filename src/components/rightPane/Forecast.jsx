import React from 'react'
import Card from './Card'

const Forecast = ({ forecast, isMetric }) => {
  return (
    <div className='grid gap-2 sm:grid sm:justify-around sm:gap-4 auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      { forecast.map( (forecastDay) => 
        <Card
        key = { forecastDay.fDate }
        forecastDate = { forecastDay.fDate }
        forecastIcon = { forecastDay.fIcon }
        forecastTemp = { forecastDay.fTemp }
        forecastDesc = { forecastDay.fDesc}
        forecastHum = { forecastDay.fHum }
        isMetric = { isMetric }
        />
        ) }
    </div>
  )
}

export default Forecast
