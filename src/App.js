import React from 'react'

const App = (props) => {
  return (
<div className='inline-block bg-slate-500 w-[400px] '>
  <div className=' '>
        <div className='text-center border border-black bg-white m-4'>
<img src={props.image} alt="" className='w-[340px] h-[300px] m-4' />
        <p>{props.name}</p>
        </div>
        
      </div>
  </div>
      
    

  )
}

export default App