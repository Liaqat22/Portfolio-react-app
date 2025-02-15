import { Grid2 } from '@mui/material'
import React from 'react'
import Intro from './Intro'
import ProfileDP from './ProfileDP'

function HomeHero() {
  return (
    <>
    <div className='container-fluid'>
    <Grid2 container columns={12} spacing={1.5} className="mt-6 p-1">
        <Grid2 size = {{xs : 12 , sm : 12 , md : 6}}>
            <Intro/>
        </Grid2>
        <Grid2 size = {{xs : 12 , sm : 12 , md : 6}}>
            <ProfileDP/>
        </Grid2>
    </Grid2>
    </div>
    </>
  )
}

export default HomeHero