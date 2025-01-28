import React from 'react'
import lineblack from '../../assets/black-line.svg'
import clear from '../../assets/cleared.svg'
import dog from '../../assets/dog.svg'
import travel from '../../assets/travel.svg'
import girl from '../../assets/Thumbnail.svg'
import nature from '../../assets/nature.svg'
import sky from '../../assets/sky.svg'
import water from '../../assets/water.svg'
import event1 from '../../assets/event1.svg'
import event2 from '../../assets/event2.svg'
import logo from '../../assets/footerlogo.svg'

const MediaPage = () => {
  return (
    <>
    <section className='pt-[96px] pb-[96px] bg-[#EFF7F2]'>
      <div className='container mx-auto max-w-[1280px]'>
        <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
          <img className='mb-8' src={lineblack} alt="" />
          <h2 className='mb-8 uppercase'>Top news</h2>
        </div>

        <div className='flex items-center gap-[96px]'>
          <div className='text-[#1D2130] w-full'>
            <h2 className='text-[56px] font-bold leading-[67.2px] mb-[16px]'>Our goal is to make water available for everyone</h2>
            <p className='text=[#525560] text-[16px] font-medium mb-[32px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <button className='px-[32px] py-[16px] bg-[#70C174] rounded text-[#fff] text-[16px] font-medium'>Read more</button>
          </div>

          <div className='w-full grid grid-rows-3 gap-[24px] bg-white p-[24px] rounded-2xl'>
            <div className='flex items-center gap-[24px]'>
              <img src={clear} alt="cleared" />
              <h2 className='text-[20px] font-bold leading-[30px]'>Don’t destroy greenery and don’t spoil scenery. <p className='text-[16px] font-normal text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p></h2>
            </div>
            <div className='flex items-center gap-[24px]'>
              <img src={dog} alt="cleared" />
              <h2 className='text-[20px] font-bold leading-[30px]'>Why saving wildlife is extremely important <p className='text-[16px] font-normal text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p></h2>
            </div>
            <div className='flex items-center gap-[24px]'>
              <img src={travel} alt="cleared" />
              <h2 className='text-[20px] font-bold leading-[30px]'>Caring for the present is caring for the future <p className='text-[16px] font-normal text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p></h2>
            </div>
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

export default MediaPage