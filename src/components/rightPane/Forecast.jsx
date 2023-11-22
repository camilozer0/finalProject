import React from 'react'
import Card from './Card'

const Forecast = ({ forecast, isMetric }) => {
  return (
    <div className='flex justify-around gap-4'>
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
