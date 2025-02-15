import React from 'react'
import { NavLink } from 'react-router-dom'
import cv from '../media/Liaqat-ReactDev-Resume.pdf'

function Intro() {
    return (
        <>
            <div className='flex flex-col gap-[2.5rem]'>
                <h3 className='name text-3xl'>Hello,
                    <br />I'm
                    <span className="capitalize myname font-black text-5xl mx-2 text-[#00b4d8]">
                        Liaqat Ali</span>
                </h3>

                <p className='text-[1.1rem] text-justify px-2'>
                Since beginning my journey as a React developer nearly a year ago, I've worked with Eziline Software House, consulted for startups, and collaborated with talented individuals to create responsive web applications.
                </p>

                <div className = "btns flex flex-row gap-3">
            <NavLink className=' mx-1' to='/contact' >
                <button  className='px-3 py-2  bg-gradient-to-l from-[#2095ac] to-[#0166b3] font-semibold flex items-center justify-center min-w-[140px] rounded-sm'>
          <span className='text-white'>Contact Me</span>
            </button></NavLink>
            <a  className='px-3 py-2 bg-gradient-to-r from-[#2095ac] to-[#0166b3] text-white font-semibold no-underline flex items-center justify-center min-w-[140px] rounded-sm'  href={cv} download="">
             <span>Download CV</span>
            </a>
          
            </div>
            </div>
        </>
    )
}

export default Intro