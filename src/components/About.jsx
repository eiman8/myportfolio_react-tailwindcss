import React from 'react'
import about_img from '../assets/about_image.png'
const About = () => {
  return (
    <section className='mt-20 mb-20 flex flex-col md:flex-row justify-center h-180 container mx-auto items-center bg-[#cae3ef] rounded-2xl'>
      <div className='flex gap-12 pl-100 pr-100'>
        <img src={about_img} alt="" className='rounded-2xl'/>
        <div className='pt-12'>
          <h1 className='text-4xl font-poppins-bold tracking-wide'>About Me</h1>
          <p className='pt-6 font-roboto-regular tracking-widest leading-loose'>Hi! I’m a passionate web developer who loves creating clean, responsive, and user-friendly websites. I enjoy turning ideas into functional and visually appealing digital experiences. My goal is to build web solutions that not only look great but also deliver smooth performance across all devices.</p>
        </div>
      </div>
    </section>
  )
}

export default About
