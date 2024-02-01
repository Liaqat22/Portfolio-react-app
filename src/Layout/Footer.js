import React from 'react'

function Footer() {
  return (
    <div>
        <div className='container-fluid '>
          <div className='row bg-dark'>
            <div className='col-md-9'>
            <h1 className=' text-white footer'>All Rights are Reserved &copy; Liaqat Ali 2024</h1>
            </div>
            <div className='col-md-3' style={{display:'flex',justifyContent:'space-evenly'}}>
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
