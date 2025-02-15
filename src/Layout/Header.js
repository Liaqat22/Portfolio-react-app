import {  Grid2 } from '@mui/material'
import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import NavRes from './NavRes'

function Header() { 
  const tabs = [
    { title: "home", url: "/" },
    { title: "projects", url: "/portfolio" },
    { title: "contact", url: "/contact" },
  ]
  const icons = [
    { url: "mailto:liaqatali097306@gmail.com", title: "email", icon: "https://cdn.simpleicons.org/gmail" },
    { url: "https://www.linkedin.com/in/liaqat-ali-bb086522a/ ", title: "linkedin", icon: "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1739507695/pngwing.com_cio5wh.png" },  // Search icon
    { url: "https://wa.me/message/SVZAPYZNQV27P1 ", title: "whatsapp", icon: "https://cdn.simpleicons.org/whatsapp" },
    { url: "https://github.com/Liaqat22", title: "cart", icon: "https://cdn.simpleicons.org/github/white" }  // Shopping cart icon
  ];
  return (
    <>
      <nav className='navContainer'>
        <div className="sx:!block lg:!hidden  md:!hidden">
          <NavRes />
        </div>

        <div className='p-4  sx:!hidden lg:!block  md:!block '>
          <Grid2 container spacing={1.5} columns={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid2 size={{ sm: 3, md: 3 }} >
              <div className='logodiv flex  items-center'>

              <Link className="navbar-brand " to="/"   style={{transitionDelay:'0.3s',color:'white'}}><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Link>
              </div>
            </Grid2> {/*LOGO*/}

            <Grid2 size={{ sm: 5, md: 5 }} >
              <ul className='p-0 m-0 flex flex-row justify-around items-center '>
                {tabs.map((t, i) => (
                  <li key={i} className='list-none'>
                    <NavLink to={t.url} className="no-underline capitalize text-white font-semibold px-3 py-2 current:text-[#2095ac] current:font-bold  current:border-b-[3px] current:border-t-[3px] rounded-md current:border-[#2095ac]" >{t?.title}</NavLink>
                  </li>
                ))}
              </ul>
            </Grid2>

            <Grid2 size={{ sm: 2.7, md: 3 }} >
              <ul className='p-0 m-0 flex flex-row justify-around items-center '>
                {icons.map((t, i) => (
                  <li key={i} className='list-none'>
                    <NavLink to={t.url} className="no-underline capitalize text-[#000000] font-semibold p-2 current:rounded-md current:border-l-[2px]  current:border-b-[2px] current:border-lightgoldbg" >
                      {/* <i className={`fa-lg ${t?.icon}`} /> */}
                      <img
              className="w-7 hover:scale-125 hover:duration-150  "
              src={t.icon}
              alt={`pic ${i}`}
              loading="lazy"
            />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Grid2>

          </Grid2>
        </div>
      </nav>
      
   
    </>
  )
}

export default Header
