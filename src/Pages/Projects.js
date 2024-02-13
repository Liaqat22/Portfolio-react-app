import React from 'react'
// import axios from 'axios'
// import { message, Spin } from 'antd';
import { NavLink } from 'react-router-dom'
import { projectContent } from '../ProjectData/Data';


function Projects() {
    // const [ loading , setLoadng] = useState(false)
  //   const [projects , setProjects] = useState([])

  //   //all projects
  
  // const getAllProjects = async () => {
  //   try {
  //     setLoadng(true)
  //     const { data } =await axios.get(
  //       `https://personal-portfolio-api-s.vercel.app/api/v1/project/get-project`);
  //     if (data?.success) {
  //       setProjects(data?.projects)
  //       setLoadng(false)
  //              console.log("project got Successfully");   
 
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     message.error("something went wrong");
  //     setLoadng(false)
  //   }}
  //   useEffect(()=>{
  //     getAllProjects()
  //   },[])
  return (
    <>
      <div className='text-center '>
     <h1 className='text-center headingxl services' data-aos="fade-down" >Latest Projects</h1>
       {/* {loading&&  <Spin tip="Loading" size="large"/>} */}
      </div>
      {
        projectContent.slice(0,3).map((project, i) => (
          <div className='container-fluid containerfluid' style={{ overflow: 'hidden' }}>
            <div className='row' key={project._id}>
              <div className='col-md-6'>
                <h1 className='headings' >- Project {i + 1}</h1>
                <h1 className='headingxl ' style={{color:"#f8f7ff"}}>{project.Projectname}</h1>
                <p className='paratext ' data-aos="fade-right">
                  {project.ProjectDescription}
                </p>

                <div className='btun m-3' data-aos="fade-left"><i className="fa-solid fa-arrow-right" style={{ color: 'yellow'}} />
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
              <div className='col-md-6' data-aos="fade-left">
                <img className="imgproject" src={project.ProjectImage} alt='.' />
              </div>
            </div>
          </div>
        ))
      }


      <div className='d-flex justify-content-center pb-3 '>
        <NavLink className='btn btn-light m-3 viewall' to='/portfolio' style={{ color: "#005199" }}>View All</NavLink>

      </div> 


    </>
  )
}

export default Projects
