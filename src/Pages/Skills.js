import React from 'react'

import html from "../media/icons/html5.png"
import css from "../media/icons/css3.png"
import js from "../media/icons/javascript.png"
import react from "../media/icons/react.png"
import firebase from "../media/icons/firebase.png"
import bootstrap from "../media/icons/pngegg.png"
import github from "../media/icons/github.png"
import materialUI from "../media/icons/pngwing.com.png"
import redux from "../media/icons/redux.png"

function Skills() {
    const skills = [
        { skillImg : react,skillName : "react"},
        { skillImg :firebase,skillName : "firebase"},
        { skillImg : html,skillName : "html"},
        { skillImg :css,skillName : "css"},
        { skillImg : js,skillName : "js"},
        { skillImg : redux,skillName : "redux"},
        { skillImg : bootstrap,skillName : "bootstrap"},
        { skillImg : materialUI,skillName : "materialUI"},
        { skillImg : github,skillName : "github"},
       
    ]
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                <h1 className='text-center headingxl services' data-aos="fade-down" >Skills</h1>
                    {skills.map((s,i)=>(

                    <div className='col-md-2  skillsOuter  text-center ' key={i+1} >
                        <div className='skillsInner '>

                        <img src={s.skillImg} alt= {s.skillName} className='p-3 skillphoto' data-aos="zoom-out"/>

                        </div>
                    </div>
                    ))}
                   
                </div>
            </div>
        </>
    )
}

export default Skills
