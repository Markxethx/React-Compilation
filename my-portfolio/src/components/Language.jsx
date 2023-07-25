import React from 'react'
import { arrow } from '../assets'
const Language = ({lang1, lang2}) => (
    
    <div className='flex flex-wrap'>
        <div className='ml-3 w-fit h-[31px] bg-white justify-center items-center flex flex-row rounded-[5px] my-3'>
            <img src={arrow} alt="arrow" />
            <h3 className='px-3 font-bold text-brown'>{lang1}</h3>
        </div>

        <div className='ml-3 w-fit h-[31px] bg-white justify-center items-center flex flex-row rounded-[5px] my-3'>
            <img src={arrow} alt="arrow" />
            <h3 className='px-3 font-bold text-brown'>{lang2}</h3>
        </div>
    </div>

    
)


export default Language;