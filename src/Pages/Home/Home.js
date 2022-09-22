import { Typography, AppBar } from '@mui/material'
import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import profilePic from '../../assets/profilePic.jpg'
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';


function About() {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <NavBar/>
        </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 20,
            pb: 6,
          }}
        >
          <Container>
            <Grid
              container spacing={2}
            >
              <Container
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
                item xs={8}
              >
                <CardContent>
                    <Typography  variant="h2" component="div" align='left' >
                      Howdy,
                    </Typography>
                    <Typography align='left' paragraph={true} variant="h5">
                      I'm Anya, a 3rd year computer science student
                      pursuing coursework and research in Human-Computer Interaction, Programming Language Development, and Web Application Development. 
                      I'm also a digital illustrator that enjoys graphic design and working across disciplines.
                    </Typography>
                </CardContent>
              </Container>
              <Container
                 sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: '40%',
                }}
              >
                <CardContent align='right'>
                    <Avatar
                      alt="profilePic"
                      src={profilePic}
                      sx={{ width: "90%", height: "90%",}}
                    />
                </CardContent>
              </Container>
            </Grid>
          </Container>  
        </Box>
      </main>
    </>
  )
}

export default About