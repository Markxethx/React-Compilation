import React from 'react' 
import PersonalData from '../components/Layout/PersonalData'
import PersonalInfo from '../components/Forms/PersonalInfo'
import PropertyTypes from '../components/Forms/PropertyTypes'
import PropertyBrands from '../components/Forms/PropertyBrands'
export default function Signup() {
  return (
  <section className="flex sm:flex-row flex-col">
    <PersonalData/>
    <div className='hidden'>
      <PersonalInfo/>
    </div>
    <div className='hidden'>
      <PropertyTypes/>
    </div>
      <PropertyBrands/>
  </section>
  )
}
