import React, { useRef } from 'react'
import { TbWorldSearch } from 'react-icons/tb'

const Search = ( { handleCity, updateCity }) => {
  //const inputVal = useRef();

  return (
    <div className='flex gap-2'>
    <button
    className='text-xl'
    onClick={ handleCity }
    ><TbWorldSearch/></button>
    <input 
    className='text-gray-900 font-medium text-xl rounded-full px-4 bg-slate-200'
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
