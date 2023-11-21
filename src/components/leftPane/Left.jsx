import Search from './Search'
import Current from './Current'
import Weather from './Weather'
import WeatherInfo from './WeatherInfo'
import CurrLoc from './CurrLoc'

const Left = ( { handleCity, updateCity, city, iconUrl, dayData, getCurrentLoc }) => {
  
  
  return (
    <div className='grid justify-center content-around basis-3/12 bg-gray-700'>
        <h1 className='justify-self-center'>Your weather App</h1>
      <div className='flex justify-around gap-16'>
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
      />
        <WeatherInfo
        dayData = { dayData }
        />
      <CurrLoc
      city = { city }
      />
    </div>
  )
}

export default Left