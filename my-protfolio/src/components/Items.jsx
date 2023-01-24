import React from 'react';
import Language from './Language';
import { projectItems } from '../constants'

const Items = () => (
    <section className='w-full'>
        <h2 className='text-gradient mb-5'><a href="">Visit my Github Repo</a></h2>
        <div className='flex md:flex-row flex-col w-full justify-around flex-wrap items-center'>
            {projectItems.map(items => (
                    <div className='flex flex-col mb-5'>
                        <div key={items.id} className='max-w-[300px] h-[293px] rounded-[10px] flex flex-col bg-card-gradient'>
                            <img src={items.icon} alt="Startup" className='w-[300px] h-[175px] rounded-t-[10px]' />
                            <div className='flex flex-col'>
                                <Language
                                lang1 = {items.lang1}
                                lang2 = {items.lang2}
                                />
                                <p className='ml-3 text-white'>{items.text}</p>
            
                            </div>
                        </div>
                    </div>
            ))
            }
        </div>
    </section>

)

export default Items