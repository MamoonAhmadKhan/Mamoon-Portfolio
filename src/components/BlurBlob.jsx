import React from 'react'

const BlurBlob = () => {
  return (
    <div className='absolute top-[30%] max-[400px]:top-[60%] max-[800px]:top-[80%] max-[800px]:left-[30%] min-[2300px]:top-[15%] max-[1000px]:left-[8%] left-[5%] w-[30%] h-[30%] max-[800px]:w-[35%] max-[800px]:h-[35%] max-[1000px]:w-[20%] max-[1000px]:h-[20%]'>
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-bounce [animation-duration:3s]'></div>
    </div>
  )
}

export default BlurBlob