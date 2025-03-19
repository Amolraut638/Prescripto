import React from 'react'
import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-16 my-10 mt-40 text-sm'>
            {/* -----left section------ */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit perferendis modi consequatur, dolorum veniam facere sapiente dignissimos temporibus, et consequuntur omnis ullam.</p>
            </div>

            {/* ------middle section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ------right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-7666824989</li>
                    <li>amolraut1902@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* ------copyright text------- */}
        <div>
            <hr/>
            <p className='text-sm text-center py-5'>Copyright 2025@ Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer