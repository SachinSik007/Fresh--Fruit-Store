import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='bg-[#ede6df] py-12 mt-12'>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0.3}}
        className='container flex justify-between items-center'>
         {/* logo section */}
         <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
        <p className='text-[#de2c4d] font-serif'>Fruit</p>
        <p className='text-[#fb923c] font-serif'>Store</p>
        <FaLeaf className='text-green-500'/>
         </div>
         {/* Social icons Section */}
         <div className='flex text-3xl items-center gap-4 mt-6 text-gray-600'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
         </div>
        </motion.div>
    </footer>
  )
}

export default Footer