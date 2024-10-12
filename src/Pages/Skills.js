import React from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
// Import icons
import html from "../media/icons/html5.png";
import css from "../media/icons/css3.png";
import js from "../media/icons/javascript.png";
import react from "../media/icons/react.png";
import firebase from "../media/icons/firebase.png";
import bootstrap from "../media/icons/pngegg.png";
import github from "../media/icons/github.png";
import materialUI from "../media/icons/pngwing.com.png";
import redux from "../media/icons/redux.png";
import bgimg from "https://firebasestorage.googleapis.com/v0/b/chatting-app-9ba60.appspot.com/o/randompics%2F252.jpg?alt=media&token=1fff5e99-5a50-4ddb-83e8-d5174b1f131e";

function Skills() {
  const skills = [
    { skillImg: react, skillName: "react" },
    { skillImg: firebase, skillName: "firebase" },
    { skillImg: html, skillName: "html" },
    { skillImg: css, skillName: "css" },
    { skillImg: js, skillName: "js" },
    { skillImg: redux, skillName: "redux" },
    { skillImg: bootstrap, skillName: "bootstrap" },
    { skillImg: materialUI, skillName: "materialUI" },
    { skillImg: github, skillName: "github" },
  ];


  // Duplicate the skill array for seamless scrolling
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
      <Typography variant="h4"  className=' section-head' data-aos="fade-down" gutterBottom>
        Skills
      </Typography>
      <Box sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 3,
        borderRadius: "1rem",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
      }} >

        <Box
          sx={{
            display: 'inline-flex',
            animation: 'marquee 10s linear infinite', // Slower animation for a longer set
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {duplicatedSkills.map((s, i) => (
            <Grid2
              key={i + 1}
              className="skillsOuter text-center"
              sx={{ flexShrink: 0, width: '130px', mx: 2 }}
            >
              <Box className="skillsInner">
                <img src={s.skillImg} alt={s.skillName} className="p-2 " />
              </Box>
            </Grid2>
          ))}
        </Box>

        {/* Custom marquee CSS */}
        <style>
          {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%); /* Move only half the length since we have duplicated the skills */
            }
          }
        `}
        </style>
      </Box>

    </>

  );
}

export default Skills;
