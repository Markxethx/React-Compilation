import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: ""
        }
    )
    console.log(formData.employment)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
            
                <input 
                    type="radio"
                    name="unemployed"
                    id="employment"
                    onChange={handleChange}
                    value={formData.employment === "unemployed"}    //here we specify our own value
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    name="unemployed"
                    id="part-time"
                    onChange={handleChange}
                    value={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    name="unemployed"
                    id="full-time"
                    onChange={handleChange}
                    value={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    )
}
