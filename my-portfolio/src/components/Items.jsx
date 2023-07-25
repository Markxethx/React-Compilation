import React from 'react';
import Language from './Language';
import { projectItems1 } from '../constants';
import { useState } from 'react';


const Items = () => {

    const [hover, setHover] = useState(-1);

    return (
        <section className='w-full'>
        <h2 className='text-gradient my-5 px-5 smd:px-10 '><a href="https://github.com/Markxethx" target={"blank"}>Visit my Github Repo <i className="fa-solid fa-up-right-from-square"></i></a></h2>
        <div className='w-full'>
            <div className='flex md:flex-row w-full justify-around flex-wrap items-center'>
                {projectItems1.map((items, index) => (
                        <div key={items.id} className='xlg:mr-10 lg:mr-5 relative flex flex-col mb-5 border-solid border-2 border-brown rounded-[10px]'>
                            <div className='max-w-[300px] h-[293px] flex flex-col bg-card-gradient' onMouseEnter={() => setHover(index)}
                                 onMouseLeave={() => setHover(-1)}>
                                <div className='w-[300px] h-[175px] overflow-hidden'>
                                    <img src={items.icon} alt="Startup" className='card w-full h-full rounded-t-[10px]' />
                                </div>
                                <div className={`flex flex-col h-[118px] ${hover === index ? "grayscale opacity-90 z-10" : ""}`}>
                                    <Language
                                    key={items.id}
                                    lang1 = {items.lang1}
                                    lang2 = {items.lang2}
                                    />
                                    <p className='ml-3 text-white'>{items.text}</p>
                                </div>

                                <div key={items.id} className={`${hover === index ? "grayscale opacity-90 z-50" : "hidden"} bot absolute top-[175px] flex justify-around items-center bg-primary w-[300px] h-[118px]`}>
                                    <div className='link1'><a href={items.web} target={"_blank"}><i className="text-[60px] text-brown fa-solid fa-link"></i></a></div>
                                    <div className='link2'><a href={items.github} target={"_blank"}><i className="text-[60px] text-brown github fa-brands fa-github"></i></a></div>
                                </div>
                                
                            </div>
                        </div>
                ))
                }
            </div>
        </div>
    </section>
    )
}
    

export default Items