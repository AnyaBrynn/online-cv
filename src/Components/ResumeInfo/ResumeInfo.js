import React from 'react'
import { Typography } from '@mui/material'
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
    <Container id="Education" sx={{pt:10,  flexGrow: 1}}>
    <Typography variant="h2" sx={{width:"100%", p: 5, textDecoration: 'underline'}}>
            Education
    </Typography>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        University of Glasgow
        </Typography>
        <Typography variant="h4">
        Glasgow, Scotland | Expected Graduation 2024 
        </Typography>
        <Typography variant='h4' sx={{fontWeight: 'bold'}} display="inline">Computer Science Bsc</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Recipient of Undergraduate Excellence Scholarship
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ GPA of 17.9 
                </Typography>
            </ListItem>
        </List>
        <Typography variant="h3">
        East Chapel Hill High School
        </Typography>
        <Typography variant="h4">
        Chapel Hill, NC, USA | 2017-20
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ National Honours Society member 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Completed six Advanced Placement (college/university credit) courses in 
   the fields of: Computer Science, Calculus BC, Statistics, 
   Earth Science, US History, English Literature, English Language
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ GPA: 4.0 
                </Typography>
            </ListItem>
        </List>
        <Typography variant="h3">
        Wyoming High School
        </Typography>
        <Typography variant="h4">
        Wyoming, OH, USA | 2016-17
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Outstanding World Studies 1 Student
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Outstanding Spanish 1 Student
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>
    
    {/* Employment  */}
    <Container id="Employment" sx={{pt:10,  flexGrow: 1}}>
    <Typography variant="h2" sx={{width:"100%", p: 5, textDecoration: 'underline'}}>
            Employment
    </Typography>
    {/* HMU  */}    
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        NSF REU at Harvey Mudd College
        </Typography>
        <Typography variant="h4">
        Claremont, CA, USA | May 2022 - Aug 2022
        </Typography>
        <Typography variant='h4' sx={{fontWeight: 'bold'}} display="inline">Intern Researcher</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Designed and built a web application to enable user navigation and annotation of Shakespeare’s works
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Extensive use of React.js, Material-UI, and XPath to optimise coding and user experience
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
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
        Chapel Hill, NC, USA | Aug 2018 - Feb 2020
        </Typography>
        <Typography variant='h4' sx={{fontWeight: 'bold'}} display="inline">Server</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Host and server responsible for a welcoming environment and order accuracy
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Effectively managed time to work and achieve honours status in school
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
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
        Chapel Hill, NC, USA | 2018
        </Typography>
        <Typography variant='h4' sx={{fontWeight: 'bold'}} display="inline">Lead Prop Designer</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Led team responsible for designing and building props for five individual one-acts
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Responsible for effective communication between directors, producers, and builders
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Delivered props accurately and on time with the production schedule 
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* projects  */}
    <Container id="Projects" sx={{pt:10,  flexGrow: 1, }}>
    <Typography variant="h2" sx={{width:"100%", p: 5, textDecoration: 'underline'}}>
            Projects
    </Typography>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        Network and Operating Systems
        </Typography>
        <Typography variant="h4">
        Fall 2021
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                ∙ Built network application using Python socket library
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Developed and tested code to meet defined functional specification
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
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
                <Typography variant='h6'>
                ∙ Designed and implemented an efficient data structure to aid data analysis
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Manipulated a database without Python helper libraries 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                ∙ Applied Matplotlib to design and program data visualisations for complex data sets
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* skills  */}
    <Container id="Skills" sx={{pt:10,  flexGrow: 1, }}>
    <Typography variant="h2" sx={{width:"100%", p: 5, textDecoration: 'underline'}}>
            Skills
    </Typography>
    <Box sx={{width:"100%", p: 5}}>
    <Typography variant="h3">
       Coding Languages
        </Typography>
        <Typography variant="h6" sx={{pt:2}}>Python, Java, Javascript, HTML, CSS, XPath</Typography>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
    <Typography variant="h3">
       Software
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">Web Development</Typography>: 
                React.js, Django, Material-UI, Grommet
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">Productivity</Typography>:
                Google Slides, Microsoft Word, Microsoft Excel, Microsoft PowerPoint,
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">Art and Design</Typography>: 
                Krita, Procreate, Adobe Illustrator, Adobe Premiere Pro 
                </Typography>
            </ListItem>
        </List>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3">
        Languages 
        </Typography>
        <Typography variant="h6" sx={{pt:2}}>English (native), Spanish (intermediate), German (beginner), Portuguese (survival)</Typography>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
    <Typography variant="h3">
       Current Courses 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">Third Year</Typography>: 
                Algorithmics 1 (H), Interactive Systems (H), Prof Software Development (H), Data Fundamentals (H), Systems Programming (H), 3rd Year Team Project (H)
                </Typography>
            </ListItem>
        </List>
    </Box>
    <Box sx={{width:"100%", p: 5}}>
    <Typography variant="h3">
       Past Courses 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">First Year</Typography>: 
                Introduction to Computational Thinking, Computing Systems, Mathematics, Digital Media and Information Studies
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>
                <Typography sx={{textDecoration: 'underline'}} display="inline">Second Year</Typography>:
                Java Programming, Algorithm Foundations, Networks and Operating Systems, Algorithms and Data Structures, 
                Object Oriented Software Engineering, Web App Development, Economics, Economic and Social History, Portuguese 
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