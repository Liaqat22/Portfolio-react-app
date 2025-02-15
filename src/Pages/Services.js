import { Grid2 } from '@mui/material'
import React from 'react'


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
            <div className='container-fluid flex flex-col gap-3'>
                    <h3  className=' section-head text-4xl' data-aos="fade-down" >Services</h3>
                    <Grid2 container spacing={2} columns={12} >
                    {services.map((s,i) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} className="mt-3" key={i+1}>

                            <div className="card p-3 bg-dark text-center border-none rounded-lg bg-gradient-to-b from-[#5ab2f7] to-[#028cf3]" data-aos="fade-left">
                                <div className="card-body flex flex-col gap-3">
                                    <div >  {s?.icon} {s?.icon2}</div>
                                    <h3 className='text-lg font-semibold' >{s?.serviceName}</h3>
                                    {/* <Typography variant='body2'>{s.description}</Typography> */}
                                </div>
                            </div>
                        </Grid2>
                    ))}


                </Grid2>

            </div>
        </>
    )
}

export default Services