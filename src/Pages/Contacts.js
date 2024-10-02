import axios from 'axios'
import React, { useState } from 'react'
import { message } from 'antd';
import { TextField, Button, Box, Typography,Link,IconButton, Grid2 } from '@mui/material';




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
    <div>

      <div className='container-fluid '>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6'>
            <Typography className=' head2'>- Contact me</Typography>
            <Typography variant='h4' className='head1 m-2'>Connect with me</Typography>
            <Typography  data-aos="fade-left">
            Reach out for any inquiries or collaboration opportunities. I'm here to help with your web development needs and would love to hear from you!
            </Typography>

          {/* Phone Section */}
      <Grid2 container spacing={1} className='m-3' style={{ transitionDelay: '0.3s' }} display="flex" alignItems="center" >
        <Grid2 size={3}>
          <IconButton>
            {/* <PhoneIcon /> */}
            <i className="fa-solid fa-phone " />
          </IconButton>
        </Grid2>
        <Grid2 size={5}>
          <Typography >
            +923446505923 <br />
            +923211961948
          </Typography>
        </Grid2>
      </Grid2>

      {/* Email Section */}
      <Grid2 container spacing={1} className='m-3' style={{ transitionDelay: '0.4s' }} display="flex" alignItems="center" >
        <Grid2 size={3}>
          <Link href = "https://liaqatali097306@gmail.com" underline='none'>
          <IconButton>
            {/* <EmailIcon /> */}
            <i className="fa-solid fa-envelope " />
          </IconButton>
          </Link>
        </Grid2>
        <Grid2 size={5} whiteSpace="wrap">
          <Link href="https://liaqatali097306@gmail.com" underline="none" >
            <Typography  color='white'>
              liaqatali097306@gmail.com
            </Typography>
          </Link>
        </Grid2>
      </Grid2>


          </div>
          <div className='col-md-6'>
          <Box component="form" data-aos="fade-up" sx={{ transitionDelay: '0.5s' }} onSubmit={handleSubmit}>
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
      
              <Button variant="contained" color="info" type="submit" sx={{ color: 'white',fontWeight:"bold",background:"#00b4d8",borderRadius:"2rem",mt: 3  }} className='btn-hover'>
              Send to me
              </Button>
    </Box>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
