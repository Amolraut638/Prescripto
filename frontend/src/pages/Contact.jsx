import React from 'react'
import { assets } from '../assets/assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>Sadguru Apartment, Near Akurdi Railway Station,<br /> Akurdi-411035 , Pune.</p>
            <p className='text-gray-500'>Mo : +917666824989 <br /> Email : amolraut1902@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-gray-600 px-8 py-4 text-sm hover:bg-gray-600 hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>

        </div>
    </div>
  )
}

export default Contact