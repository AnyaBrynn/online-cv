import React from 'react'
import { Card, CardContent, AppBar } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import NavBar from '../../Components/NavBar/NavBar'
import MailTo from '../../Components/MailTo/MailTo'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Contact() {

  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <NavBar/>
      </AppBar>
      <Container sx={{width:"50%", pt:15}}>
        <CardContent align='left' sx={{width:"30%"}}>
        <Typography>
          To contact: <MailTo label="Email" mailto="mailto:anya.stiefbold@gmail.com"/>
          <OpenInNewIcon/>
        </Typography>
        <Typography>
         To code: <a href="https://github.com/AnyaBrynn" target="_blank" rel="noopener noreferrer">GitHub</a>
         <OpenInNewIcon/>
        </Typography>
        <Typography>
          To connect: <a href="https://www.linkedin.com/in/anya-stiefbold-165029249/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <OpenInNewIcon/>
        </Typography>
        </CardContent>
      </Container>
    </div>
  )
}

export default Contact