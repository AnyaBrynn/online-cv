import React from 'react'
import { Typography, Card } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import WorkNav from '../WorkNav/WorkNav'


function Contact() {
  return (
    <>
    <WorkNav/>
    <main>   
    {/* education */}



    {/* HMU  */}
    <Container sx={{pt:10,  flexGrow: 1}}>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        NSF REU at Harvey Mudd College
        </Typography>
        <Typography variant="h4">
        Claremont, CA, USA | May 2022 - Aug 2022 <h4>Intern Researcher</h4>
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Designed and built a web application to enable user navigation and annotation of Shakespeare’s works
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Extensive use of React.js, Material-UI, and XPath to optimise coding and user experience
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Research and project presented at Harvey Mudd and the REU SoCal Symposium
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* Server */}
    <Container sx={{pt:10, }}>
    <Box sx={{width:"100%", p:5}}>
        <Typography variant="h3">
        The Pita Grill
        </Typography>
        <Typography variant="h4">
        Chapel Hill, NC, USA | Aug 2018 - Feb 2020 <h4>Server</h4>
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Host and server responsible for a welcoming environment and order accuracy
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Effectively managed time to work and achieve honours status in school
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Used earnings to purchase equipment for digital illustration and college savings
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* Prop designer  */}
    <Container sx={{pt:10,}}>
    <Box sx={{width:"100%", p:5}}>
        <Typography variant="h3">
        East Chapel Hill High School One Acts
        </Typography>
        <Typography variant="h4">
        Chapel Hill, NC, USA | 2018 <h4>Lead Prop Designer</h4>
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Led team responsible for designing and building props for five individual one-acts
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Responsible for effective communication between directors, producers, and builders
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Delivered props accurately and on time with the production schedule 
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    </main>
    </>
  )
}

export default Contact