import React from 'react'
import ProjectCard from './ProjectCard';
import { projectContent } from '../ProjectData/Data';


function Portfolio() {
  return (
    <>
   
   <div className='container-fluid'>
    <div className='row'>
      {projectContent?.map((p , i)=>(

      <div className='col-md-3 mt-3' key={i+1}>
    <ProjectCard cardDetails = {p}/>
      </div>
      ))}
    </div>
          </div>




    </>
  )
}

export default Portfolio
