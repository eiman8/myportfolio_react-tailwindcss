import React from 'react'
import heroImage from '../assets/my_hero_image.png'
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center container mx-auto pt-30 md:pt-44 px-4 sm:px-6 lg:px-8 md:pb-36'>
      {/* Left Column */}
      <div className='w-full md:w-1/2 space-y-8'>
        <h1 className='font-poppins-bold text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left'>Turning ideas into interactive digital experiences</h1>
        <p className='text-gray-600 text-lg md:text-xl max-w-xl font-roboto-regular'>Together, let's create beautiful and responsive web designs that perfectly represent your company</p>
        <button className='cursor-pointer hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
          <a href="#" className='font-roboto-regular tracking-wider'>Get To Know More</a>
        </button>
      </div>
      {/* Right Column */}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <img src={heroImage} alt="my-hero-img" />
      </div>
    </section>
  )
}

export default Hero
