import React from 'react'
import bg from '../../assets/bg.svg'

const Make = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='container mx-auto h-[395px] bg-center bg-no-repeat'>
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-5xl font-bold text-center w-[630px] text-white leading-[57px] mt-[93px]'>
            You can contribute to make the environment greener!
        </h2>
        <div className='flex items-center gap-8 mt-8'>
            <button className='px-8 py-4 bg-[#70C174] text-white rounded-[4px] cursor-pointer'>Join as a volunteer</button>
            <button className='px-8 py-4 bg-[#fff] text-black rounded-[4px] cursor-pointer'>
                Donate
            </button>
        </div>
    </div>
</div>
  )
}

export default Make