import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectCard({ cardDetails }) {
  return (
    <>
     

      <Card className='project-card ' sx={{borderRadius: "2rem"}} data-aos="fade-up">
        <CardMedia
          component="img"
          alt={cardDetails?.projectname}
          height="140"
          image={cardDetails?.ProjectImage}
          loading='lazy'
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" whiteSpace='nowrap'>
            <b>{cardDetails?.projectname}</b>
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cardDetails?.ProjectDescription.substring(0, 50)}
          </Typography> */}
        </CardContent>
        <CardActions className='m-2'>
          <NavLink to={cardDetails?.ProjectURL} target="_blank">
            <Button variant='contained'  sx={{ borderRadius: "2rem",background:"#012a4a" }}>Preview</Button>
          </NavLink>
          {/* <Button variant='contained' color='info' sx={{ borderRadius: "2rem" }}>see More</Button> */}
        </CardActions>
      </Card>
    </>
  )
}

export default ProjectCard