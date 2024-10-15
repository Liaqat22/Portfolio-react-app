import { Button, Typography } from '@mui/material'
import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import NavRes from './NavRes'

function Header() { 
  return (
    <>
      
    <div className='navContainer '>
  <nav className="navbar navbar-expand-lg  " style={{overflow:'hidden'}} >
  <div className="container-fluid d-flex flex-nowrap" >
    <Link className="navbar-brand " to="/"   style={{transitionDelay:'0.3s',color:'white'}}><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Link>
    <div className='ms-auto sideRes'style={{position:"fixed", top:"5px",right:"10px", zIndex:"3"}}>
  <NavRes/>
  
   </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to="/"><Typography>Home</Typography></NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio"><Typography>Projects</Typography></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"><Typography>Contact</Typography></NavLink>
        </li>
       
      </ul>
      <div >

      </div>
      <div className='container-fluid '>
          <div className='row '>
         
            <div className='col-md-12 ' style={{display:'flex',justifyContent:'space-around' ,alignItems:"center"}}>
            <a href='https://liaqatali097306@gmail.com'><i className="fa-solid envelope fa-envelope p-0" style={{color:' #61DBFB',filter:"none"}}/></a> 
           <a href='https://www.linkedin.com/in/liaqat-ali-bb086522a/'> <i className="fa-brands fa-linkedin" style={{color:' #61DBFB'}}/></a>
           <a href='https://wa.me/qr/FTMDCAW2J6XEP1'><i className="fa-brands fa-whatsapp" style={{color:' #61DBFB'}}/></a> 
           <a href='https://github.com/Liaqat22'><i className="fa-brands fa-github" style={{color:' #61DBFB'}}/></a> 
           <Button variant="contained" sx={{ color: 'white',fontWeight:"bold",background:"#00b4d8",borderRadius:"2rem", whiteSpace:"nowrap" }} className='btn-hover contact' >
            <NavLink  to='/contact' style={{textDecoration:"none", color:"inherit"}} >
            Contact me
              </NavLink>
              </Button>
            </div>
           
          </div>

      </div>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Header
