import React from 'react'
import blackLine from '../../assets/black-line.svg'

const About = () => {
  return (
    <section className='mt-[96px]'>
        <div className='container mx-auto max-w-[1280px]'>
            <div>
                <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
                    <img className='mb-8' src={blackLine} alt="" />
                    <h2 className='mb-8'>Know About us</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About