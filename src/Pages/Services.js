import React from 'react'
import { Typography } from '@mui/material'


function Services() {


    const services = [
        { serviceName: 'Web development', icon: <i className='fa-solid fa-code fa-fade   service-icon' /> },
        { serviceName: 'Bug fixing', icon: <i className='fa-solid fa-wrench fa-bounce  service-icon' /> },
        { serviceName: 'Custom Web Design', icon: <i className='fa-solid fa-gear  fa-spin  service-icon' /> },

        {
            serviceName: 'PSD to HTML',
            icon: <> <i className='fa-solid fa-image  service-icon' />
                <i className='fa-solid fa-arrow-right fa-beat service-icon' /></>
            , icon2: <i className='fa-brands fa-html5  service-icon' />
        },
    ]
    return (
        <>
            <div className='container-fluid '>
                    <Typography variant='h4' className=' section-head' data-aos="fade-down" gutterBottom>Services</Typography>
                <div className='row '>
                    {services.map((s,i) => (
                        <div className='col-md-3 mt-3' key={i+1}>

                            <div className="card bg-dark  card-service" data-aos="fade-left">
                                <div className="card-body">
                                    <div className=' m-3'>  {s?.icon} {s?.icon2}</div>
                                    <Typography ><b>{s?.serviceName}</b></Typography>
                                    {/* <Typography variant='body2'>{s.description}</Typography> */}
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </>
    )
}

export default Services