import React from 'react'
import lineblack from '../../assets/black-line.svg'
import wedo from '../../assets/wedo.svg'
import city from '../../assets/Icon.svg'
import event1 from '../../assets/event1.svg'
import event2 from '../../assets/event2.svg'
import logo from '../../assets/footerlogo.svg'
import girl from '../../assets/Thumbnail.svg'
import nature from '../../assets/nature.svg'
import sky from '../../assets/sky.svg'
import water from '../../assets/water.svg'
import info1 from '../../assets/info1.svg'
import info2 from '../../assets/info2.svg'
import info3 from '../../assets/info3.svg'

const WhatWeDo = () => {
    return (
        <>
        <section className='mt-[96px]  mb-[96px]'>
            <div className='container mx-auto max-w-[1280px]'>
                    <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
                        <img className='mb-8' src={lineblack} alt="" />
                        <h2 className='mb-8'>What we do</h2>
                    </div>
                <div className='flex gap-[110px] items-center mb-[96px]'>
                    <div className='w-full text-[#1D2130]'>
                        <h2 className='text-[56px] font-bold leading-[67.2px mb-[34px]'>We are working worldwide</h2>
                        <p className='text-[#525560] text-[16px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                    <div className='w-full'>
                        <img src={wedo} alt="What we do" />
                    </div>
                </div>


            </div>
                <div className='bg-[#EFF7F2]'>
                    <div className='container mx-auto max-w-[1280px]'>
                    <h2 className='text-[#1D2130] text-[48px] font-bold pt-[96px] pb-[64px]'>What we do for the environment</h2>
                    
                    <div className='grid grid-cols-3 gap-[64px] pb-[96px]'>
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Build healthy cities <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Protect land and water<p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Tree plantation <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Water sustainability <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Animal safety <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Biodiversity <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                    </div>
                    </div>
                </div>
        </section>

        <section>
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


      <section className='mt-[96px] mb-[96px]'>
            <div className='container mx-auto max-w-[1280px]'>
              <div className='text-center mb-[48px]'>
                <h2 className='text-[#1D2130] text-[48px] font-bold mb-[16px]'>Read our Recent News</h2>
                <p className='text-[#525560] text-[16px] font-normal'>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
              </div>
      
              <div className='grid grid-cols-4 gap-[24px]'>
                <div>
                  <img src={girl} alt="image" />
                  <h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>Don’t destroy greenery and don’t spoil scenery</h3>
                  <p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                <div>
                  <img src={nature} alt="image" />
                  <h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>Is climate change happening faster than expected?</h3>
                  <p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                <div>
                  <img src={sky} alt="image" />
                  <h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>Top 10 facts about wind farms you didn't know</h3>
                  <p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
                <div>
                  <img src={water} alt="image" />
                  <h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>Our goal is to make water available for everyone</h3>
                  <p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                </div>
              </div>
            </div>
          </section>

        <section>
              <div className='container mx-auto max-w-[1280px]'>
                <h2 className='text-[#1D2130] font-medium text-[40px]'>Our Events</h2>
                <div className='mt-[48px] grid grid-cols-2 gap-[24px]'>
                  <div>
                    <img src={event1} alt="image" />
                  </div>
                  <div>
                    <img src={event2} alt="image" />
                  </div>
                </div>
              </div>
            </section>
        
            <footer className="bg-black text-white py-10 mt-[96px]">
                    <div className="container mx-auto max-w-[1280px] px-4 grid md:grid-cols-4 gap-8">
                      <div>
                        <img src={logo} alt="Logo" />
                      </div>
            
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Our team</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="hover:text-gray-400">About us</a></li>
                          <li><a href="#" className="hover:text-gray-400">Team</a></li>
                          <li><a href="#" className="hover:text-gray-400">What we do</a></li>
                          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                      </div>
            
                      <div>
                        <h3 className="text-lg font-semibold mb-4">More</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="hover:text-gray-400">Projects</a></li>
                          <li><a href="#" className="hover:text-gray-400">Events</a></li>
                          <li><a href="#" className="hover:text-gray-400">Donate</a></li>
                          <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                        </ul>
                      </div>
            
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                          <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                          <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                          <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
                        </ul>
                      </div>
                    </div>
            
                    <div className="mt-10">
                      <div className="container mx-auto px-4 text-center">
                        <h3 className="text-xl font-semibold mb-6">Subscribe to get latest updates</h3>
                        <form className="flex flex-wrap justify-center items-center gap-4">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-600 max-w-[300px]"
                          />
                          <button
                            type="submit"
                            className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </footer>
        </>
    )
}

export default WhatWeDo