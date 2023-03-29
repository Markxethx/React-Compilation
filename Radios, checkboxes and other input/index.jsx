import React from 'react'

const GetInTouch = () => {
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            email: "",
            phone: "",
            purpose: "",
            prefferedWayToContact: "",
            position: "",
            comments: "",
            company: "",
            residential: "",
            commercial: "",
            industrial: "",
            tourism: "",
            rawLand: "",
        }
    )
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }
  return (
    <section className='getInTouch flex justify-center items-center flex-col w-full lg:mb-[120px] lg:mt-[82px]'>
        <h1 className='font-normal text-[40px] lg:mb-[54px]'>GET IN TOUCH</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">NAME</label>
            <input
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px]'
                id='name'
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
            <label htmlFor="email">EMAIL</label>
            <input
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px]'
                type="email"
                id='email'
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <label for="phone">CONTACT NO.</label>
            <br />
            <input 
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px]'
                type="tel"
                id="phone" 
                name="phone" 
                onChange={handleChange} 
                pattern="[0-9]{11}" 
                value={formData.phone} 
                required 
            />

            <br />
            <label htmlFor="purpose">PURPOSE OF INQUIRY</label>
            <br />
            <select 
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px] lg:text-[15px]'
                id="purpose" 
                value={formData.purpose}
                onChange={handleChange}
                name="purpose"
            >
                <option value="">SELECT PROCESS</option>
                <option value="two">two</option>
                <option value="three">three</option>
                <option value="four">four</option>
                <option value="five">five</option>
                <option value="six">six</option>
                <option value="seven">seven</option>
            </select>

            <fieldset className='lg:mb-[40px]'>
                <legend>PREFFERED WAY TO CONTACT YOU</legend>
                <div className='flex justify-evenly items-center lg:flex-row flex-col'>
                    <input 
                        type="radio"
                        id="text"
                        name="prefferedWayToContact"
                        value="text"
                        checked={formData.prefferedWayToContact === "text"}
                        onChange={handleChange}
                    />
                    <label htmlFor="text">TEXT</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="whatsapp"
                        name="prefferedWayToContact"
                        value="whatsapp"
                        checked={formData.prefferedWayToContact === "whatsapp"}
                        onChange={handleChange}
                    />
                    <label htmlFor="whatsapp">WHATSAPP</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="viber"
                        name="prefferedWayToContact"
                        value="viber"
                        checked={formData.prefferedWayToContact === "viber"}
                        onChange={handleChange}
                    />
                    <label htmlFor="viber">VIBER</label>
                    <br />
                </div>
            </fieldset>

            <label htmlFor="position">ARE YOU A</label>
            <br />
            <select
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px] lg:text-[15px]'
                id="position" 
                value={formData.position}
                onChange={handleChange}
                name="position"
            >
                <option value="">SELECT POSITION</option>
                <option value="two">two</option>
                <option value="three">three</option>
                <option value="four">four</option>
                <option value="five">five</option>
                <option value="six">six</option>
                <option value="seven">seven</option>
            </select>
            <br/>
            <label htmlFor="numberOfExistingChannels">
                <p className='lg:text-[20px]'>NO. OF EXISTING ONLINE CHANNELS</p>
                <p className='lg:text-[15px]'>HOW MANY WEBSITES & SOCIAL MEDIA CHANNELS DO YOU HAVE</p>
            </label>
            <textarea
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px] lg:text-[15px]'
                id='numberOfExistingChannels'
                value={formData.comments}
                onChange={handleChange}
                name="comments"
            />

            <br/>
            <label htmlFor="company">
                <p>COMPANY</p>
            </label>
            <textarea
                className='lg:w-[711px] lg:h-[47px] border-solid border-2 lg:mb-[40px] lg:text-[15px]'
                id='company'
                value={formData.company}
                onChange={handleChange}
                name="company"
            />

            <br />
            <fieldset className='lg:mb-[75px]'>
                <legend>
                    <h3 className='lg:text-[20px]'>TYPE OF PROPERTY YOU'RE SELLING</h3>
                    <p className='lg:text-[15px]'>CHECK ALL THAT APPLY</p>
                </legend>
                <br />
                <div className='flex flex-between items-start'>
                    <input
                        className='lg:mr-5 lg:mt-1'
                        type="checkbox"
                        id="residential"
                        name="residential"
                        checked={formData.residential}
                        onChange={handleChange}
                    />
                    <label htmlFor="residential">
                        <h5>RESIDENTIAL</h5>
                        <p>CONDOMENIUM, HOUSE & LOT, LOT ONLY</p>
                    </label>
                </div>
                
                <br />
                
                <div className='flex flex-between items-start'>
                    <input
                        className='lg:mr-5 lg:mt-1'
                        type="checkbox"
                        id="commercial"
                        name="commercial"
                        checked={formData.commercial}
                        onChange={handleChange}
                    />
                    <label htmlFor="commercial">
                        <h5>COMMERCIAL</h5>
                        <p>SALE, RENT, LEASE</p>
                    </label>
                </div>
                
                <br />
                
                <div className='flex flex-between items-start'>
                    <input
                        className='lg:mr-5 lg:mt-1'
                        type="checkbox"
                        id="industrial"
                        name="industrial"
                        checked={formData.industrial}
                        onChange={handleChange}
                    />
                    <label htmlFor="industrial">
                        <h5>INDUSTRIAL</h5>
                        <p>SALE, RENT, LEASE</p>
                    </label>
                </div>
                
                <br />
                
                <div className='flex flex-between items-start'>
                    <input
                        className='lg:mr-5 lg:mt-1'
                        type="checkbox"
                        id="tourism"
                        name="tourism"
                        checked={formData.tourism}
                        onChange={handleChange}
                    />
                    <label htmlFor="tourism">
                        <h5>TOURISM</h5>
                        <p>HOTEL, RESORT, SHORT STAY, LONG STAY, HOTEL ROOM INVESTMENT</p>
                    </label>
                </div>
                
                <br />

                <div className='flex flex-between items-start'>
                    <input
                        className='lg:mr-5 lg:mt-1'
                        type="checkbox"
                        id="rawLand"
                        name="rawLand"
                        checked={formData.rawLand}
                        onChange={handleChange}
                    />
                    <label htmlFor="rawLand">
                        <h5>RAW LAND</h5>
                        <p>RESIDENTIAL, COMMERCIAL, FARM LOT, BEACH PROPERTY, MOUNTAIN PROPERTY</p>
                    </label>
                </div>

            </fieldset>
            <div className='flex justify-center items-center'>
                <button type='submit' className='lg:w-[279px] lg:h-[45px] rounded-full font-bold text-white lg:text-[24px]'>SEND</button>
            </div>
            
        </form>
    </section>
  )
}

export default GetInTouch

