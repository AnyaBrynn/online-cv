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
    {/* option to view full resume  */}
    
    {/* HMU  */}
    <Container sx={{pt:10, }}>
    <Card sx={{width:"50%"}}>
        <Typography variant="h3">
        NSF REU at Harvey Mudd College
        </Typography>
        <Typography variant="h4">
        Intern Researcher
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='p'>
                ∙ Designed and built a web application to enable user navigation and annotation of Shakespeare’s works
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Extensive use of React.js, Material-UI, and XPath to optimise coding and user experience
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Research and project presented at Harvey Mudd and the REU SoCal Symposium
                </Typography>
            </ListItem>
        </List>
    </Card>
    </Container>

    {/* Server */}
    <Container sx={{pt:10, }}>
    <Card sx={{width:"50%"}}>
        <Typography variant="h3">
        The Pita Grill
        </Typography>
        <Typography variant="h4">
        Server
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='p'>
                ∙ Host and server responsible for a welcoming environment and order accuracy
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Effectively managed time to work and achieve honours status in school
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Used earnings to purchase equipment for digital illustration and college savings
                </Typography>
            </ListItem>
        </List>
    </Card>
    </Container>

    {/* Prop designer  */}
    <Container sx={{pt:10, }}>
    <Card sx={{width:"50%"}}>
        <Typography variant="h3">
        East Chapel Hill High School One Acts
        </Typography>
        <Typography variant="h4">
        Lead Prop Designer
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='p'>
                ∙ Led team responsible for designing and building props for five individual one-acts
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Responsible for effective communication between directors, producers, and builders
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='p'>
                ∙ Delivered props accurately and on time with the production schedule 
                </Typography>
            </ListItem>
        </List>
    </Card>
    </Container>

    </main>
    </>
  )
}

export default Contact