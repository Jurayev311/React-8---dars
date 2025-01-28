import React from 'react'
import blackLine from '../../assets/black-line.svg'
import bgvideoimage from '../../assets/Video.svg'
import Lot from '../lot/Lot'
import Info from '../info/Info'
import info1 from '../../assets/info1.svg'
import info2 from '../../assets/info2.svg'
import info3 from '../../assets/info3.svg'
import Donation from '../donation/Donation'
import Make from '../make/Make'

const AboutHero = () => {
  return (
    <>
    <section className='mt-[96px] mb-[96px]'>
        <div className='container mx-auto max-w-[1280px]'>
            <div className='flex items-center gap-[96px]'>
                <div className='text-[#1D2130] text-[16px] font-bold w-full'>
                    <div className='flex gap-[24px] items-center'>
                    <img className='mb-8' src={blackLine} alt="" />
                    <h2 className='mb-8'>Know About us</h2>
                    </div>
                    <h3 className='font-bold text-[48px] leading-[57.6px] mb-[32px]'>We help nature smile and survive everywhere</h3>
                    <p className='font-normal text-[16px] text-[#525560] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <p className='font-normal text-[16px] text-[#525560] mb-[48px]'>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <button className='px-[32px] py-[16px] bg-[#70C174] text-[16px] font-medium rounded text-white'>Learn more</button>
                </div>

                <div className='w-full'>
                  <img src={bgvideoimage} alt="video" />
                </div>
            </div>
        </div>
    </section>

<Info />

    <section className='mt-[96px]'>
                <div className='container mx-auto max-w-[1280px]'>
                    <div className='text-center'>
                        <h3 className='text-[16px] text-[#1D2130] font-bold mb-[16px]'>Projects we have done</h3>
                        <h2 className='text-[#1D2130] text-[48px] mb-[64px] font-bold'>We are creating a sustainable society, for everyone.</h2>
                    </div>
                    <div className='grid grid-cols-3 gap-[24px]'>
                      <div>
                        <img src={info1} alt="image" />
                      </div>
                      <div>
                        <img src={info2} alt="image" />
                      </div>
                      <div>
                        <img src={info3} alt="image" />
                      </div>
                    </div>
                </div>
            </section>
    <Donation />
    <Make />
    <Lot />
    </>
  )
}

export default AboutHero