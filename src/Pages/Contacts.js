import axios from 'axios'
import React, { useState } from 'react'
import { message } from 'antd';
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
    <div>

      <div className='container-fluid containerfluid mt-0'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='headings'>- Contact me</h1>
            <h1 className='headingxl'>Get In Touch With Me</h1>
            <p className='paratext' data-aos="fade-left">
              I'm excited to discuss your web development needs and explore how I can contribute to your projects. Whether you're looking to build a cutting-edge website, enhance your web application's performance, or need assistance with any web development task, I'm here to help!
            </p>

            <div className='row m-3' data-aos="fade-left" style={{ transitionDelay: '0.3s' }}>
              <div className='col-md-2 forwidth'><i className="fa-solid fa-phone " /></div>
              <div className='col-md-9 forwidth1'><p className='headings' style={{ color: 'white' }}>+923446505923 <br />+923211961948</p></div>
            </div>
            <div className='row m-3' data-aos="fade-right" style={{ transitionDelay: '0.4s' }}>
              <div className='col-md-2 forwidth'><NavLink  to = "https://liaqatali097306@gmail.com"><i className="fa-solid fa-envelope " /></NavLink></div>
              <div className='col-md-9 forwidth1'><NavLink  to = "https://liaqatali097306@gmail.com" style={{textDecoration:"none"}}><p className='headings' style={{ color: 'white' }}>liaqatali097306@gmail.com</p></NavLink></div>
            </div>
          </div>
          <div className='col-md-6'>
            <form data-aos="fade-up" style={{ transitionDelay: '0.5s' }} onSubmit={handleSubmit}>
              <div className=" mt-2">
                <input type="text" className="form-control" placeholder="Full name" value={name} aria-label="First name" required style={{ color: "white" }} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className=" mt-2">
                <input type="email" className="form-control" placeholder=" email (Optional)" value={email} aria-label="Last name" style={{ color: "white" }} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className=" mt-2">
                <input type="text" className="form-control" placeholder="Company name" value={company} required aria-label="Last name" style={{ color: "white" }} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className=" mt-2">
                <input type="text" className="form-control" placeholder="Interview invitation (Optional)" value={interview} aria-label="Last name" style={{ color: "white" }} onChange={(e) => setInterview(e.target.value)} />
              </div>
              <div className="mt-2">
                <textarea className="form-control " id="exampleFormControlTextarea1" value={description} required placeholder="Message" rows={4} style={{ color: "white" }} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <button className='btn btn-info mt-3' type='submit' style={{ color: 'white' }}>Send to me</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
