import React, { useRef } from 'react'
import { TbWorldSearch } from 'react-icons/tb'

const Search = ( { handleCity, updateCity }) => {
  //const inputVal = useRef();

  return (
    <div className='flex gap-2'>
    <button 
    onClick={ handleCity }
    ><TbWorldSearch/></button>
    <input 
    className='text-stone-900'
    /* ref={ inputVal } */
    onChange={ updateCity }
    maxLength="30"
    onClick={ (e) => e.target.value = ''}
    type="text" 
    placeholder='Search weather' />
    </div>
  )
}

export default Search
