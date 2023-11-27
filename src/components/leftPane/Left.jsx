import Search from './Search'
import Current from './Current'
import Weather from './Weather'
import WeatherInfo from './WeatherInfo'
import CurrLoc from './CurrLoc'

const Left = ( { handleCity, updateCity, city, iconUrl, dayData, getCurrentLoc, isMetric }) => {
  
  return (
    <div className='grid justify-center content-around basis-3/12 bg-gray-700'>
        <h1 className='justify-self-center text-2xl m-4 sm:m-0'>Your weather App</h1>
      <div className='grid gap-4 place-items-center sm:flex justify-around sm:justify-between sm:gap-8'>
        <Search 
        handleCity = { handleCity }
        updateCity = { updateCity }
        />
        <Current
        getCurrentLoc = { getCurrentLoc }
        />
      </div>
      <div className='grid justify-center'>
        { iconUrl && <img src={iconUrl}  alt="this is the weather image" /> }
      </div>
      <Weather
        dayData = { dayData }
        isMetric = { isMetric }
      />
        <WeatherInfo
        dayData = { dayData }
        />
      <CurrLoc
      dayData = { dayData }
      />
    </div>
  )
}

export default Left
