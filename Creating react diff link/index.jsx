import React from 'react'
import './PersonalInfo.scss'
import { Link } from 'react-router-dom'
import SignUpTypes from '../SignUp/SignUpTypes'
const PersonalInfo = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full'>
        <div className='block'>
            <legend className='mb-14 text-xl font-monument'>PERSONAL INFO</legend>
            <form action="">
                <label htmlFor="name" className='font-bold text-xl'>Name</label>
                <input type="text" className='w-[442px] border-2 border-solid mb-5 rounded-md' id='name' />
                <div className='flex flex-row'>
                  <div className='block'>
                    <label htmlFor="Age" className='font-bold text-xl'>Age</label>
                    <input type="number" className='w-[112px] mr-6 border-2 border-solid mb-5 rounded-md'/>
                  </div>
                  
                  <div className='block'>
                    <label htmlFor="location" className='font-bold text-xl'>Location</label>
                    <input type="text" className='w-[306px] border-2 border-solid mb-5 rounded-md'/>
                  </div>
                  
                </div>
                <label htmlFor="year" className='font-bold text-xl'>Year Started in Real Estate</label>
                <input type="date" className='border-2 border-solid w-[442px] mb-5 rounded-md' />
                <label htmlFor="email" className='font-bold text-xl'>Email</label>
                <input type="email" className='w-[442px] border-2 border-solid mb-5 rounded-md'/>
                <label htmlFor="phone" className='font-bold text-xl'>Mobile Number</label>
                <input type="number" className='w-[442px] border-2 border-solid mb-5 rounded-md' />
                <div className='flex justify-between items-center'>
                  <p>Back</p>
                  <button>
                   <Link to="../../components/SignUp/SignUpTypes">Next</Link>
                  </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PersonalInfo
