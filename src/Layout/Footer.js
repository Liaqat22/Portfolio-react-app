import React from 'react'

function Footer() {
  const icons = [
    { url: "mailto:liaqatali097306@gmail.com", title: "email", icon: "https://cdn.simpleicons.org/gmail" },
    { url: "https://www.linkedin.com/in/liaqat-ali-bb086522a/ ", title: "linkedin", icon: "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1739507695/pngwing.com_cio5wh.png" },  // Search icon
    { url: "https://wa.me/message/SVZAPYZNQV27P1 ", title: "whatsapp", icon: "https://cdn.simpleicons.org/whatsapp" },
    { url: "https://github.com/Liaqat22", title: "cart", icon: "https://cdn.simpleicons.org/github/white" }  // Shopping cart icon
  ];
  return (
    <footer>
        <div className='container-fluid px-0 mt-5'>
          <div className='row bg-dark p-3 m-0 d-flex align-items-center'>
            <div className='col-md-8'>
            <h3 className=' text-white text-xl text-justify footer'>All Rights are Reserved &copy; Liaqat Ali {new Date().getFullYear()}</h3>
            </div>
            <div className='col-md-4' >
            <ul className='p-0 m-0 flex flex-row justify-around items-center '>
                {icons.map((t, i) => (
                  <li key={i} className='list-none'>
                    <a href={t.url} className="no-underline capitalize text-[#000000] font-semibold p-2 current:rounded-md current:border-l-[2px]  current:border-b-[2px] current:border-lightgoldbg" >
                      {/* <i className={`fa-lg ${t?.icon}`} /> */}
                      <img
              className="w-7 hover:scale-125 hover:duration-150  "
              src={t.icon}
              alt={`pic ${i}`}
              loading="lazy"
            />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

      </div>
    </footer>
  )
}

export default Footer
