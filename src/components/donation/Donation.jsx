import React from 'react'
import round from '../../assets/round.svg'

const Donation = () => {
  return (
    <div className='w-full h-[600px] bg-black my-24'>
				<div className='container mx-auto max-w-[1280px] flex gap-[290px] pt-24'>
					<div className='flex flex-col w-[611px] text-white'>
						<h2 className='text-5xl font-bold leading-[57px]'>
							How we spend your donations and where it goes
						</h2>
						<p className='font-normal text-base mt-4 text-[#9d9c9b]'>
							We understand that when you make a  donation, you want to know
							exactly where your money is going and we pledge to be transparent.
						</p>
						<div className='w-full flex flex-wrap mt-8 gap-6'>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#BEF3C0] '></span>
								<span className='text-base font-medium text-white'>
									40% planting trees
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#AC94F1] '></span>
								<span className='text-base font-medium text-white'>
									35% cleanliness program
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#FFF0CA] '></span>
								<span className='text-base font-medium text-white'>
									10% helping people
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#F9CF64] '></span>
								<span className='text-base font-medium text-white'>
									10% animal safety
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#F38FBF] '></span>
								<span className='text-base font-medium text-white'>
									5% feeding the poor
								</span>
							</div>
						</div>
					</div>
					<div>
						<img src={round} alt='' />
					</div>
				</div>
			</div>
  )
}

export default Donation