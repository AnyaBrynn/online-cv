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
    <Container sx={{pt:10,  flexGrow: 1}}>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        University of Glasgow
        </Typography>
        <Typography variant="h4">
        Glasgow, Scotland | Expected Graduation 2024 <h4>Computer Science Bsc</h4>
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Recipient of Undergraduate Excellence Scholarship
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ GPA of 17.9 
                </Typography>
            </ListItem>
        </List>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        East Chapel Hill High School
        </Typography>
        <Typography variant="h4">
        Chapel Hill, NC, USA | 2017-20
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ National Honours Society member 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Completed six Advanced Placement (college/university credit) courses in 
   the fields of: Computer Science, Calculus BC, Statistics, 
   Earth Science, US History, English Literature, English Language
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ GPA: 4.0 
                </Typography>
            </ListItem>
        </List>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        Wyoming High School
        </Typography>
        <Typography variant="h4">
        Wyoming, OH, USA | 2016-17
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Outstanding World Studies 1 Student
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Outstanding Spanish 1 Student
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>
    

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

    {/* Server */}
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

    {/* Prop designer  */}
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

    {/* projects  */}
    <Container sx={{pt:10,  flexGrow: 1}}>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        Network and Operating Systems
        </Typography>
        <Typography variant="h4">
        Fall 2021
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Built network application using Python socket library
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Developed and tested code to meet defined functional specification
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Developed efficient coding and debugging techniques
                </Typography>
            </ListItem>
        </List>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        Semester 2 Final Project
        </Typography>
        <Typography variant="h4">
        Spring 2021
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Designed and implemented an efficient data structure to aid data analysis
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Manipulated a database without Python helper libraries 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Applied Matplotlib to design and program data visualisations for complex data sets
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* skills  */}

    </main>
    </>
  )
}

export default Contact