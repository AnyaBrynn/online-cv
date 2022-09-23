import React from 'react'
import { CardContent, AppBar } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import NavBar from '../../Components/NavBar/NavBar'
import MailTo from '../../Components/MailTo/MailTo'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import { useTheme } from "@mui/material/styles/useTheme"

// image imports 
import EmailIcon from '@mui/icons-material/Email'
import GitHubLogo from '../../assets/GitHubLogo.png'
import LinkedInLogo from '../../assets/LinkedInLogo.png'



function Contact() {

  return (    
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <NavBar/>
      </AppBar>
      <br/> 
      <Box
        sx={{
          pt: 20,
          pb: 6,
        }}
      >
        <Container>
          <Typography variant="h4">
            Connect with me at:
          </Typography>
        </Container>
        <br/>
        <Container sx={{pt:5, }}>
          <Grid
            container spacing={2}
          >
            <Container
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "30%",
              }}
              item xs={8}
            >
              <CardContent>
                <Typography  variant="h4" component="div" align='center' >
                  <EmailIcon sx={{ fontSize: 25 }}/><br/><MailTo label="Email" mailto="mailto:anya.stiefbold@gmail.com"/><OpenInNewIcon/>
                </Typography>
              </CardContent>
            </Container>
            <Container
              sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              width: '30%',
              }}
             >
              <CardContent>
                <Typography  variant="h4" component="div" align='center' >
                  <img width="25em" src={GitHubLogo} alt="GitHub logo" /><br/><a href="https://github.com/AnyaBrynn" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <OpenInNewIcon/>
                </Typography>
              </CardContent>
            </Container> 
            <Container
              sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              width: '30%',
              }}
            >
              <CardContent>
                <Typography  variant="h4" component="div" align='center' >
                  <img width="25em" src={LinkedInLogo} alt="LinkedIn logo" /><br/><a href="https://www.linkedin.com/in/anya-stiefbold-165029249/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <OpenInNewIcon/>
                </Typography>
              </CardContent>
            </Container>
          </Grid>
        </Container>  
      </Box>




    </div>
  )
}

export default Contact