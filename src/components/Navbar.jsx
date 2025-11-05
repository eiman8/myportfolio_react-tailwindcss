import React, {act, useState} from 'react'
import Hamburger from 'hamburger-react'
// import heroImage from '../assets/my_hero_image.png'

const Navbar = () => {
const [isOpen, setOpen] = useState(false);
const [activeLink, setActiveLink] = useState("#home");
const navLinks = [
  {href: "#home", label: "Home"},
  {href: "#about", label: "About"},
  {href: "#contact", label: "Contact"},
  {href: "#mylearnings", label: "My Learnings"},
];
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        
        {/* My Logo */}
        <div className='cursor-pointer'>
          {/* <img src={heroImage} alt="" /> */}
          <h1>My Logo Here</h1>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button onClick={() => setOpen(!isOpen)} className='md:hidden'>
          <Hamburger size={25}/>
        </button>

        {/* Menu List Items */}
        <div className='hidden md:flex items-center gap-10'>
          {navLinks.map((link, index) => (
            <a onClick={() => setActiveLink(link.href)} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full": "text-gray-600 hover:text-gray-900"}`} key={index} href={link.href}>{link.label}</a>
            ))}
        </div>

        {/* Get In Touch Button */}
        <button className='cursor-pointer hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
          <a href="#">Get In Touch</a>
        </button>
      </div>

        {/* Menu List Items */}
        {
          isOpen && (
            <div className='md:hidden bg-white border-t border-gray-100 py-4'>
              <div className='container mx-auto px-4 space-y-3'>
                {navLinks.map((link, index) => (
                  <a onClick={() => {setActiveLink(link.href); setOpen(false);}} className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-500":"text-gray-600 hover:text-gray-900"}`} key={index} href={link.href}>{link.label}</a>
                ))}
                <button className='cursor-pointer w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                  <a href="#">Get In Touch</a>
                </button>
              </div>
            </div>
          )
        }
    </nav>
  )
}

export default Navbar
