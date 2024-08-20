import React from 'react'
import {NavLink,Link} from 'react-router-dom'

function Header() { 
  return (
    <div className='navContainer'>
      
  <nav className="navbar navbar-expand-lg  " style={{overflow:'hidden'}} >
  <div className="container-fluid">
    <Link className="navbar-brand " to="/"   style={{transitionDelay:'0.3s',color:'white'}}><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Link>
    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      {/* <span className="navbar-toggler-icon" /> */}
      <i className="fa-solid fa-bars-staggered fa-3x p-2" style={{color:"white"}}/>

    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to="/">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      <div >

      </div>
      <div className='container-fluid '>
          <div className='row '>
         
            <div className='col-md-7 reswidth1200px' style={{display:'flex',justifyContent:'space-evenly'}}>
            <a href='https://liaqatali097306@gmail.com'><i className="fa-solid envelope fa-envelope p-0" style={{color:' #61DBFB',filter:"none"}}/></a> 
           <a href='https://www.linkedin.com/in/liaqat-ali-bb086522a/'> <i className="fa-brands fa-linkedin" style={{color:' #61DBFB'}}/></a>
           <a href='https://wa.me/qr/FTMDCAW2J6XEP1'><i className="fa-brands fa-whatsapp" style={{color:' #61DBFB'}}/></a> 
           <a href='https://github.com/Liaqat22?tab=repositories'><i className="fa-brands fa-github" style={{color:' #61DBFB'}}/></a> 
            </div>
            <div className='col-md-5'>
            <NavLink className='btn btn-info contactbtn'  to='/contact' style={{color:'white',whiteSpace:'nowrap'}}>Contact me</NavLink>

            </div>
          </div>

      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
