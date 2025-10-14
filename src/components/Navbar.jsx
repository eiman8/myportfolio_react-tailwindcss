import React, {useState} from 'react'
import Hamburger from 'hamburger-react'

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
          My Logo Here
        </div>

        {/* Menu List Items */}
        <div className='hidden md:flex items-center gap-10'>
          {navLinks.map((link, index) => (
            <a onClick={() => setActiveLink(link.href)} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full": "text-gray-600 hover:text-gray-900"}`} key={index} href={link.href}>{link.label}</a>
            ))}
        </div>


        {/* Get In Touch Button */}
        {/* Mobile Hamburger Menu Button */}
      </div>
    </nav>
  )
}

export default Navbar
