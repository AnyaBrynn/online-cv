import { Typography } from '@mui/material'
import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function About() {
  return (
    <div>
      <NavBar />
      <div>
        <Box sx={{pt: 15, pb: 6,}}>
          <Card style={{display: 'inline-block'}} sx={{ width: '60%', }}>
            <Typography  variant="h2" component="div" align='left' >
              Hello, I am Anya Stiefbold
            </Typography>
            <br/>
            <Typography align='left' paragraph={true} variant="h5">
            I'm Anya, a 3rd year computer science student
          pursuing coursework and research in Human-Computer Interaction, Programming Language Development, and Metadata Applications. 
          I'm also a digital illustrator that enjoys graphic design and working across disciplines.
          </Typography>
          </Card>
        </Box>
      </div>


    </div>
    
  )
}

export default About