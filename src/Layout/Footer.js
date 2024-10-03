import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
        <div className='container-fluid px-0 mt-3'>
          <div className='row bg-dark p-3 m-0 d-flex align-items-center'>
            <div className='col-md-8'>
            <Typography variant='h6' className=' text-white footer'>All Rights are Reserved &copy; Liaqat Ali 2024</Typography>
            </div>
            <div className='col-md-4' style={{display:'flex',justifyContent:'space-evenly'}}>
           <a href='https://liaqatali097306@gmail.com'><i className="fa-solid envelope fa-envelope p-0" style={{color:' #61DBFB',filter:"none"}}/></a> 
           <a href='https://www.linkedin.com/in/liaqat-ali-bb086522a/'> <i className="fa-brands fa-linkedin" style={{color:' #61DBFB'}}/></a>
           <a href='https://wa.me/qr/FTMDCAW2J6XEP1'><i className="fa-brands fa-whatsapp" style={{color:' #61DBFB'}}/></a> 
           <a href='https://github.com/Liaqat22?tab=repositories'><i className="fa-brands fa-github" style={{color:' #61DBFB'}}/></a> 
            </div>
          </div>

      </div>
    </div>
  )
}

export default Footer
