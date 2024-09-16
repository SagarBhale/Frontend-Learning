import React from 'react'

function Cards({values,handleClick,index}) {
  const {image,name,profession,friends} = values;
  return (
    <div className='w-37 bg-zinc-200 p-3' >
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover' src={image}></img>
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xm'>{profession}</h5>
        <button onClick={()=>handleClick(index)} className=' mt-4 px-3 py-1 text-xs 
      text-white bg-blue-500 font-semibold rounded-md'>{friends === true?"Friends":"Add Friends"}</button>
      </div>
    </div>
  )
} 

export default Cards