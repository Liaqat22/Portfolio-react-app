import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { projectContent } from '../ProjectData/Data'
import CountUp from 'react-countup'
import { Grid2 } from '@mui/material'


function Scrolltriggers() {
    const [counton, setCounton] = useState(false)

    const countDown = [
        { text: "Happy Clients", counts: counton && <CountUp start={0} end={4} duration={3} delay={0} /> },
        { text: "Projects Done", counts: counton && <CountUp start={0} end={projectContent?.length + 10} duration={3} delay={0} /> },
        { text: "Courses", counts: counton && <CountUp start={0} end={5} duration={4} delay={0} /> ,},
        { text: "Years Experience", counts: counton && <CountUp start={0} end={1} duration={3} delay={0} /> },
      ]
  return (
    <>
     <ScrollTrigger onEnter={() => setCounton(true)} >
        <div className='container-fluid'>
        <Grid2 container spacing={2} columns={12} >
          {countDown.map((item,i) => (

              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} className= 'mt-3'  key={i+1}>
<div className="card p-3 bg-dark text-center border-none rounded-lg bg-gradient-to-t from-[#0061ff] to-[#83d0cb]" data-aos="fade-left">
<div className="card-body flex flex-col gap-3">
                    <h3 className='text-5xl font-semibold'>{item?.counts}</h3>
                    <h3 className='text-2xl font-semibold'>{item?.text}</h3>
                  </div>
                </div>
              </Grid2>


))}
            </Grid2>
        </div>
      </ScrollTrigger>
    </>
  )
}

export default Scrolltriggers