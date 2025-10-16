import React from 'react'
import heroImage from '../assets/my_hero_image.png'
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center container mx-auto pt-44 pb-60 px-4 sm:px-6 lg:px-8'>
        {/* Left Column  */}
        <div className='w-full md:w-1/2 space-y-8'>
          <h1 className='text-5xl leading-tight font-bold md:text-6xl lg:text-7xl'>Turn ideas into interactive digital experiences</h1>
          <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
            Together, let's create beautiful and responsive web designs that perfectly represent your company
          </p>
        </div>

        {/* Right Column */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
              <img src={heroImage} alt="Hero Image" className='relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
