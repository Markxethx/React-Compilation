import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [formData, setFormData] = 
    useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
        }
    )
    
    function handleChange(event) {
        const {name, value, } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    return (
        <section className='flex flex-col justify-center items-center'>
        <form className='flex flex-col justify-center items-center'>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="text-white w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="text-white w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="text-white w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent"
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                className="text-white w-[300px] xlg:w-[400px] h-[100px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent"
            />
            <input type={"submit"} className="w-[100px] mt-5 h-[50px] text-white submit rounded bg-orange-500"/>
        </form>
        <div className='mt-10'>
            <h1 className='text-gradient font-semibold text-lg'><i class="fa-regular fa-copyright"></i> All Rights Reserved. The Blank.eth</h1>
        </div>

        </section>
    )
}

export default Form;