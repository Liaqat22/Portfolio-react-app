import React from 'react';

// Import icons


function Skills() {
  const skills = [
    { skillImg: "https://cdn.simpleicons.org/html5", skillName: "HTML5" },
    { skillImg: "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1728705013/css3_h0j1iz.png", skillName: "CSS3" },
    { skillImg: "https://cdn.simpleicons.org/bootstrap", skillName: "bootstrap" },
    { skillImg: "https://cdn.simpleicons.org/tailwindcss", skillName: "tailwind css" },
    { skillImg: "https://cdn.simpleicons.org/javascript", skillName: "javaScript" },
    { skillImg: "https://cdn.simpleicons.org/react", skillName: "react" },
    { skillImg: "https://cdn.simpleicons.org/reactquery", skillName: "react query" },
    { skillImg: "https://cdn.simpleicons.org/redux", skillName: "redux" },
    { skillImg: "https://cdn.simpleicons.org/firebase ", skillName: "firebase" },
    { skillImg: "https://cdn.simpleicons.org/socket.io/white", skillName: "socket.io" },
    { skillImg: "https://cdn.simpleicons.org/mui", skillName: "materialUI" },
    { skillImg: "https://cdn.simpleicons.org/antdesign", skillName: "antdesign" },
    { skillImg: "https://cdn.simpleicons.org/github/white", skillName: "github" },
    { skillImg: "https://static.vecteezy.com/system/resources/previews/021/826/847/non_2x/api-icon-in-flat-style-software-integration-illustration-on-isolated-background-algorithm-programming-sign-business-concept-vector.jpg", skillName: "API integration" },
  ];



  return (
    <div className=' flex flex-col gap-4'>
      <h3  className=' section-head text-4xl' data-aos="fade-down">
      My Tech Stack
            </h3>
            <div  className = "flex justify-center gap-5 flex-wrap">
        {/* Tailwind-based Masonry Grid */}
        {skills.map((item, i) => (
          <div div  key={i} className=' p-2  rounded-md flex gap-2 flex-col cursor-pointer' >
            <img
              className="w-14 hover:scale-125 hover:duration-150  "
              src={item.skillImg}
              alt={`pic ${i}`}
              loading="lazy"
            />
            <div className=' rounded-sm text-center'>
            <p className='mb-0 text-[.7rem] font-medium capitalize'>{item.skillName}</p>
            </div>
            <hr className=' border-1 border-white opacity-100'/>
          </div>
        ))}
      </div>
      

    </div>

  );
}

export default Skills;
