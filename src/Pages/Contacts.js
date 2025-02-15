import axios from 'axios'
import React, { useState } from 'react'
import { message } from 'antd';
import { TextField, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';




function Contacts() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [interview, setInterview] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://personal-portfolio-api-s.vercel.app/api/v1/contacts/register", { name, company, description, email, interview })
      if (data?.success) {
        message.success("Your response is submitted")
      }
    } catch (error) {
      console.log(error)
      console.log("error in form sumission")
    }
  }

  return (
    <>

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-md-6 mt-3 flex flex-col gap-3'>

            <section>
              <p className='text-3xl font-semibold mb-3'>Connect with me</p>
              <p className='text-[1.1rem] text-justify px-2' data-aos="fade-left">
              Feel free to reach out for inquiries or collaborations! I’m here to help with web development, UI creation, and performance optimization, crafting seamless, high-performance digital experiences. Let’s bring your vision to life!
              </p>
            </section>

            <section>
              <List>
                <ListItem
                  className='mui-list-item mt-2 text-white tracking-widest flex flex-row gap-3 current:bg-gradient-to-l from-[#2095ac] to-[#0166b3] current:text-white current:w-[85%] rounded-r-xl'
                  sx={{ textTransform: "capitalize", paddingLeft: "0rem" }}>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className='fa-solid fa-phone-volume text-[#27ae60] text-3xl hover:scale-125 hover:duration-150 cursor-pointer' />
                  </ListItemIcon>
                  <ListItemText primary={
                    <>
                      <p className="!font-semibold mb-0">+923211961948</p>
                      <p className="!font-semibold mb-0">+923446505923</p>
                    </>
                  } />
                </ListItem>
              </List>
              <List>
                <ListItem
                  className='mui-list-item mt-2 text-white tracking-widest flex flex-row gap-3 current:bg-gradient-to-l from-[#2095ac] to-[#0166b3] current:text-white current:w-[85%] rounded-r-xl'
                  button
                  component={NavLink}
                  to="https://liaqatali097306@gmail.com"
                  sx={{ textTransform: "capitalize", paddingLeft: "0rem" }}>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      className="w-8 hover:scale-125 hover:duration-150  "
                      src="https://cdn.simpleicons.org/gmail"
                      alt='email'
                      loading="lazy"
                    />
                  </ListItemIcon>
                  <ListItemText primary={<p className="lowercase !font-semibold mb-0">liaqatali097306@gmail.com</p>} />
                </ListItem>
              </List>
            </section>



          </div>
          <div className='col-md-6 mt-3'>
            <Box component="form" data-aos="fade-up" sx={{ transitionDelay: '0.5s' }} onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Full name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email (Optional)"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Company name"
                  value={company}
                  required
                  onChange={(e) => setCompany(e.target.value)}

                />
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Interview invitation (Optional)"
                  value={interview}
                  onChange={(e) => setInterview(e.target.value)}

                />
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Message"
                  value={description}
                  required
                  multiline
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}

                />
              </Box>
              <div>


                <button type="submit" className='px-3 py-2  bg-gradient-to-l from-[#2095ac] to-[#0166b3] font-semibold flex items-center justify-center min-w-[140px] rounded-sm'>
                  <span className='text-white'>Send to me</span>
                </button>
              </div>
            </Box>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
