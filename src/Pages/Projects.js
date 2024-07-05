import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectContent } from '../ProjectData/Data';


function Projects() {
   
  return (
    <>
      <div className='text-center '>
     <h1 className='text-center headingxl services' data-aos="fade-down" >Latest Projects</h1>
      </div>
      <div className='container-fluid containerfluid' style={{ overflow: 'hidden' }}>
      {
        projectContent.slice(0,3).map((project, i) => (
            <div className='row' key={project._id}>
                <h1 className='headings' >- Project {i + 1}</h1>
              <div className='col-md-6'>
                <h1 className='headingxl ' style={{color:"#f8f7ff"}}>{project.Projectname}</h1>
                <p className='paratext ' data-aos="fade-right">
                  {project.ProjectDescription}
                </p>

               


              </div>
              <div className='col-md-6' data-aos="fade-left">
                <img className="imgproject" src={project.ProjectImage} alt='.' />
              </div>
              <div className='btun m-3 p-3' data-aos="fade-left"><i className="fa-solid fa-arrow-right" style={{ color: 'yellow'}} />
                  <NavLink
                    className='btn btn-secondary projectbtn'
                    to={project.ProjectURL}
                    style={{ background: 'transparent', color: 'yellow' }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Click to explore
                  </NavLink>   
                </div>
            </div>
        ))
      }
          </div>


      <div className='d-flex justify-content-center pb-3 '>
        <NavLink className='btn btn-light m-3 viewall' to='/portfolio' style={{ color: "#005199" }}>View All</NavLink>

      </div> 


    </>
  )
}

export default Projects
