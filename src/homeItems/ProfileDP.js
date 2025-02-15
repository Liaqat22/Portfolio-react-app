import React from 'react'

function ProfileDP() {
  const tDelaypoint1s = {
    transitionDelay: '1s'
  }
  return (
    <>
<div className='flex justify-center bgdpimg text-center mt-3' data-aos="zoom-in"  >


<div  data-aos="fade-up" style={tDelaypoint1s}>
<img className="imgdp" src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1728705281/dvStTTcICreSRyr97FsFO-removebg-preview_0_1_igeyvc.png' alt='dp' loading="lazy" />
</div>

</div>
    </>
  )
}

export default ProfileDP