import React from 'react'
import { NavLink } from 'react-router-dom'

function WorkTogather() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center p-2' data-aos="fade-out" >
                    <div className='col-md-7 p-3 flex flex-col gap-3 text-center bg-gradient-to-r from-[#0061ff] to-[#028cf3] rounded-md' >
                        <p className='text-2xl  section-head'>
                            lets work togather</p>
                        <p className='text-[1rem] text-justify '>
                            I'm excited to help with your web development projects, whether building a modern website or optimizing performance. Let's bring your vision to life!</p>
                        <NavLink to='/contact' className="flex justify-center" >
                        <button  className='px-3 py-2 bg-gradient-to-l from-[#0061ff] to-[#028cf3]  font-semibold flex items-center justify-center min-w-[140px] rounded-sm'>
          <span className='text-white'>Contact Me</span>
          </button>
          </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkTogather