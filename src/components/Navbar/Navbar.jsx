import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from 'react-icons/md'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';

const NavbarMenu = [
  {
    id: 1,
    tittle: "Home",
    link: '/'
  },
  {
    id: 2,
    tittle: "Products",
    link: '#'
  },
  {
    id: 3,
    tittle: "About",
    link: '#'
  },
  {
    id: 4,
    tittle: "Shop",
    link: '#'
  },
  {
    id: 5,
    tittle: "Contacts",
    link: '#'
  },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <nav>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 1}}
        className='container flex justify-between items-center py-4 md:pt-4'>
        {/* logo section */}
     <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-[#de2c4d] font-serif'>Fruit</p>
            <p className='text-[#fb923c] font-serif'>Store</p>
            <FaLeaf className='text-green-500'/>
          </div>
          {/* menu section */}
           <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((menu) =>(
                <li key={menu.id} className='text-xl'>
                  <a href={menu.link}
                  className='inline-block py-1 px-3 hover:text-[#de2c4d] hover:shadow-[0_3px_0_-1px] font-semibold'
                  >{menu.tittle}</a>
                </li>
              ))}
              <button className='text-xl hover:bg-[#de2c4d] hover:text-white rounded-full p-2 duration-200'>
                <MdOutlineShoppingCart />
              </button>
            </ul>
           </div>
           {/* Mobile Hamburger Menu section */}
           <div className='md:hidden' onClick={()=>setOpen(!open)}>
            <MdMenu className='text-4xl cursor-pointer'/>
           </div>
        </motion.div>
    </nav>
      {/* Mobile Menu Section */}
      <ResponsiveMenu open = {open} />
  </>
  )
}

export default Navbar