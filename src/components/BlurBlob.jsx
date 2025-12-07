import React from 'react'

const BlurBlob = () => {
  return (
    <div className='absolute top-[30%] left-[5%] w-[30%] h-[40%]'>
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-bounce [animation-duration:3s]'></div>
    </div>
  )
}

export default BlurBlob