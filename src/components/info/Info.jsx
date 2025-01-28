import React from 'react'
import blackLine from '../../assets/black-line.svg'
import dogs from '../../assets/dogs.svg'
import icon from '../../assets/Icon.svg'

const Info = () => {
  return (
    <div className='w-full h-auto bg-[#EFF7F2] mt-16'>
				<div className='container mx-auto max-w-[1280px]'>
					<div className='flex gap-[24px] items-center pt-24'>
						<img className='mb-8' src={blackLine} alt='' />
						<h2 className='mb-8 font-bold text-base text-[#1D2130]'>
							Wath We Do
						</h2>
					</div>
					<div className='flex items-center justify-center gap-24'>
						<div className='flex flex-col'>
							<h4 className='text-5xl font-bold text-[#1D2130] leading-[57px] w-[608px]'>
								We care for earth, care for the coming birth
							</h4>
							<p className='font-normal text-base text-[#525560] leading-[25px] w-[608px] mt-4'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique.
							</p>
							<div className='desc flex flex-col mt-8 gap-6'>
								<div className='flex gap-6 items-start'>
									<img src={icon} alt='image' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Build Healthy Cities
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon} alt='image' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Tree Plantation
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon} alt='image' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Protect Land and Water
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon} alt='image' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Animal Safety
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='w-[480px] h-[658px] mb-24'>
							<img src={dogs} alt='image' />
						</div>
					</div>
				</div>
			</div>
  )
}

export default Info