import React, { useState } from 'react'
import {  Drawer, Box, Grid2, ListItem, List, ListItemIcon, ListItemText, } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';



function NavRes() {
    const [open, setOpen] = useState(false); // State to control the drawer
 
const tabs = [
    { title: "home", url: "/", icon: "fa-solid fa-home", color: "lightgray" }, // Blue
    { title: "projects", url: "/portfolio", icon: "fa-solid fa-briefcase", color: "#e67e22" }, // Orange
    { title: "contact", url: "/contact", icon: "fa-solid fa-phone-volume", color: "#27ae60" } // Green
  ];
  
  
const icons = [
  { url: "mailto:liaqatali097306@gmail.com", title: "email", icon: "https://cdn.simpleicons.org/gmail" },
  { url: "https://www.linkedin.com/in/liaqat-ali-bb086522a/ ", title: "linkedin", icon: "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1739507695/pngwing.com_cio5wh.png" },  // Search icon
  { url: "https://wa.me/message/SVZAPYZNQV27P1 ", title: "whatsapp", icon: "https://cdn.simpleicons.org/whatsapp" },
  { url: "https://github.com/Liaqat22", title: "github", icon: "https://cdn.simpleicons.org/github" }  // Shopping cart icon
];



    const toggleDrawer = () => {
        setOpen(!open); // Toggle the drawer open/close
    };

    const drawerContent = (
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} className = "flex flex-col gap-4 ">
            <Box className = "flex items-center justify-center mt-3">
            <Link className="navbar-brand " to="/"   style={{transitionDelay:'0.3s',color:'white'}}><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Link>
            </Box>

            <List>
                {tabs?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 text-white tracking-widest current:bg-gradient-to-l from-[#2095ac] to-[#0166b3] current:text-white current:w-[80%] rounded-r-xl'
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize",paddingLeft:"0rem" }}
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={` text-lg  ${item.icon} `} style={{color:item.color}} />
                        </ListItemIcon>
                        <ListItemText primary={<p className ="!font-semibold mb-0">{item.title}</p>} />
                    </ListItem>
                ))}
            </List>


            <List>
                {icons?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 text-white tracking-widest current:bg-gradient-to-l from-[#2095ac] to-[#0166b3] current:text-white current:w-[85%] rounded-r-xl'
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize",paddingLeft:"0rem" }}
                        
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
              className="w-6 hover:scale-125 hover:duration-150  "
              src={item.icon}
              alt={`pic ${i}`}
              loading="lazy"
            />                        </ListItemIcon>
                        <ListItemText primary={<p className ="!font-semibold mb-0">{item.title}</p>} />
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return (
        <>
            <Grid2 container spacing={2} columns={12}  className="flex items-center justify-between p-4">
                <Grid2 size={{ sx: 5, sm: 6 }}>
                    <div className='logo '>
                        <div className='logodiv flex  items-center'>
                        <Link className="navbar-brand " to="/"   style={{transitionDelay:'0.3s',color:'white'}}><i className="fa-brands fa-react fa-spin fa-spin-reverse" style={{color:' #61DBFB'}}/> <span style={{color:' #61DBFB'}}>React</span> Developer</Link>
                        </div>
                    </div>
                </Grid2>

                <Grid2 size={{ sx: 5, sm: 5 }} className="!w-fit">
                    {/* AppBar with Menu Button */}
                    <i className='fas fa-bars fa-2xl' onClick={toggleDrawer} />
                </Grid2>
            </Grid2>




            {/* Drawer Component */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}  >
                {drawerContent}
            </Drawer>
        </>
    )
}

export default NavRes