import {  Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavRes() {
  const list = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },

  ]
  return (
    <>
      <div>

          <i className="fa-solid fa-bars-staggered  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ color: "white" }} />
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ 
           backgroundImage: `url("https://res.cloudinary.com/dc1vhqmg2/image/upload/v1728705062/328_sfqxjz.jpg")`,
           backgroundSize: 'cover', 
           backgroundPosition: 'center', 
           backgroundRepeat: 'no-repeat' }}>

          <div className="text-center p-3 mt-3 ">
            <i type="button" className="fa-solid fa-xmark fa-2x" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: "white" }} />
          </div>

          <div className="offcanvas-body text-center">
          <Typography variant='h5' fontWeight='600' ><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Typography>
            <ul className='p-0'>
              {list.map((t, i) => (
                <li key={i + 1} className='mt-4' data-bs-dismiss="offcanvas" aria-label="Close" >
                  <NavLink to={t.url} className="  btn-primary navres"  style={{ background: 'transparent' ,color:"white",textDecoration:"none"}}><Typography variant='h5' ><b>{t.name}</b>  </Typography>
                   
                  </NavLink></li>
              ))}
            </ul>
            <div className='mt-5' style={{display:'flex',justifyContent:'space-evenly'}}>
           <a href='https://liaqatali097306@gmail.com'><i className="fa-solid envelope fa-envelope p-0" style={{color:' #61DBFB',filter:"none"}}/></a> 
           <a href='https://www.linkedin.com/in/liaqat-ali-bb086522a/'> <i className="fa-brands fa-linkedin" style={{color:' #61DBFB'}}/></a>
           <a href='https://wa.me/qr/FTMDCAW2J6XEP1'><i className="fa-brands fa-whatsapp" style={{color:' #61DBFB'}}/></a> 
           <a href='https://github.com/Liaqat22'><i className="fa-brands fa-github" style={{color:' #61DBFB'}}/></a> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavRes
