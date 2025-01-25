import React from 'react'
import heroBg from '../../assets/herobg.svg'

const Hero = () => {
  return (
      <section relative>
        <img className='w-full bg-contain bg-center relative' src={heroBg} alt="hero background image" />
        <div className='container mx-auto max-w-[1280px]'>
            <h2 className='absolute top-48 left-36 '>Save the environment today for a better tomorrow</h2>
        </div>
    </section>
  )
}

export default Hero