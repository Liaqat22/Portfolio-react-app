import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectCard({ cardDetails, id }) {
  return (
    <>
     

          <div className='relative overflow-hidden card-col rounded-md'>
            <NavLink to={cardDetails?.ProjectURL} target="_blank" className='no-underline  hoverstyling absolute inset-0 bg-black/65 z-10 flex justify-center  items-center'>
              <div className=' flex justify-between flex-col gap-2 items-center w-full'>
                <button className='text-3xl px-3 py-2 text-white font-bold min-w-[70%] flex flex-row gap-3'>
                  <i className="fas fa-external-link-alt ml-1" /><span>Preview</span> </button>

              </div>
            </NavLink>
            <div className='card  relative border-none'>

              <img
                className='!object-cover !h-[18rem] !w-[100%]'
                alt={cardDetails?.projectname}
                src={cardDetails?.ProjectImage}
                loading='lazy'
              />
              <div className='card-body bg-[#dfe9fb] flex flex-col gap-2'>
                <p className='text-black text-xl font-bold mb-0'>{cardDetails.projectname}.</p>
                {/* <p className='text-[#898989] mb-0 font-semibold'> ,mn</p>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-xl font-bold mb-0'>Rp </p>
      </div> */}
              </div>
            </div>
          </div>
        


    </>
  )
}

export default ProjectCard