import React from 'react'
import { Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import WorkNav from '../WorkNav/WorkNav'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import MailTo from '../../Components/MailTo/MailTo'




function Contact() {
  return (
    <main>   
    {/* education */}
    <Container id="Education" sx={{pt:10,  flexGrow: 1, width:"60%"}} >
    <WorkNav/>
    <Box sx={{width:"100%", p: 5}}>
    <Typography variant="h3" sx={{p: 5, textDecoration: 'underline'}}>
        <MailTo label="Request Full CV" mailto="mailto:anya.stiefbold@gmail.com"/><OpenInNewIcon/> 
    </Typography>
    <Typography component={'span'} variant="h3" sx={{p: 5, textDecoration: 'underline'}}>
            Education
    </Typography>
        <Typography variant="h4">
        University of Glasgow
        </Typography>
        <Typography variant="h6">
        Glasgow, Scotland | Expected Graduation 2024 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ BSc Computer Science 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Recipient of Undergraduate Excellence Scholarship
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>

    {/* Employment  */}
    <Container id="Employment" sx={{pt:10,  flexGrow: 1, width:"60%"}}>
    {/* HMU  */}    
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3" sx={{p: 5, textDecoration: 'underline'}}>
                Employment
        </Typography>
        <Typography variant="h4">
        NSF REU at Harvey Mudd College
        </Typography>
        <Typography variant="h6">
        Claremont, CA, USA | May 2022 - Aug 2022
        </Typography>
        <Typography variant="h6">
        Video Demos: <a href="https://youtu.be/IFCXHOIWL7g" target="_blank" rel="noopener noreferrer">"Magic" Highlighting Feature"</a><OpenInNewIcon/><a href="https://youtu.be/ceCjGRKKhsk" target="_blank" rel="noopener noreferrer">Web Application Walkthrough</a><OpenInNewIcon/> 
        </Typography>
        <Typography variant='h6' sx={{fontStyle: 'italic'}} display="inline">Intern Researcher</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Designed and built a web application to enable user navigation and annotation of Shakespeare’s works
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Led the design development of the application’s UI
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Extensive use of React.js, Material-UI, and XPath to optimise coding and user experience
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Presented research and project at Harvey Mudd and the REU SoCal Symposium
                </Typography>
            </ListItem>
        </List>
    {/* Server */}
    <br/>
        <Typography variant="h4">
        The Pita Grill
        </Typography>
        <Typography variant="h6">
        Chapel Hill, NC, USA | Aug 2018 - Feb 2020
        </Typography>
        <Typography variant='h6' sx={{fontStyle: 'italic'}} display="inline">Server</Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Host and server responsible for a welcoming environment and order accuracy
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Delivered excellent service, built rapport with regulars, and interacted with a diverse customer base
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Effectively managed time to work and achieve honours status in school
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Gained the trust of the managers and was trusted to work the lunch rush solo 
                </Typography>
            </ListItem>
        </List>
    {/* Prop designer  */}
    <br/>
        <Typography variant="h4">
        East Chapel Hill High School One Acts
        </Typography>
        <Typography variant="h6">
        Chapel Hill, NC, USA | 2018
        </Typography>
        <Typography variant='h6' sx={{fontStyle: 'italic'}} display="inline">Lead Prop Designer</Typography>
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
        </List>
    </Box>
    </Container>

    {/* projects  */}
    <Container id="Projects" sx={{pt:10,  flexGrow: 1, width:"60%"}}>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3" sx={{p: 5, textDecoration: 'underline'}}>
                Projects
        </Typography>
        <Typography variant="h4">
        Personal Website 
        </Typography>
        <Typography variant="h6">
        <a href="https://github.com/AnyaBrynn/online-cv" target="_blank" rel="noopener noreferrer">GitHub Repository</a><OpenInNewIcon/> | Fall 2022
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Developed a personal website using React.js and Material UI
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Designed the website layout to present easily navigable and clear information
                </Typography>
            </ListItem>
        </List>
        <br/>
        <Typography variant="h4">
        Memory Match Game  
        </Typography>
        <Typography variant="h6">
        <a href="https://github.com/AnyaBrynn/Memory-Match" target="_blank" rel="noopener noreferrer">GitHub Repository</a><OpenInNewIcon/> | Summer 2022
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                ∙ Designed and implemented an interactive memory match game using React.js
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ UI developed with HTML/CSS to create engaging visuals for the game 
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                ∙ Implemented in-game tracker to determine number of turns a user takes 
                </Typography>
            </ListItem>
        </List>
        <br/>
        <Typography variant="h4">
        Network and Operating Systems
        </Typography>
        <Typography variant="h6">
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
        <br/>
        <Typography variant="h4">
        Semester 2 Final Project
        </Typography>
        <Typography variant="h6">
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
    <Container id="Skills" sx={{pt:10,  flexGrow: 1, width:"60%"}}>
    <Box sx={{width:"100%", p: 5}}>
        <Typography variant="h3" sx={{ p: 5, textDecoration: 'underline'}}>
                Skills
        </Typography>
        <Typography variant="h4">
            Coding Languages
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant="body1" align='left' sx={{pt:2}}>JavaScript, Python, Java, HTML/CSS, XPath, XML, Git, Bash </Typography>
            </ListItem>
        </List>
    <br/>
    <Typography variant="h4">
       Software
    </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">Frameworks</Typography>: 
                React.js, Material-UI, Grommet, Django
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">Tools</Typography>:
                Google Slides, Microsoft Word, Microsoft Excel, Microsoft PowerPoint,
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">Art and Design</Typography>: 
                Krita, Procreate, Adobe Illustrator, Adobe Premiere Pro 
                </Typography>
            </ListItem>
        </List>
    <br/>
        <Typography variant="h4">
        Languages 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant="body1" align='left' sx={{pt:2}}>English (native), Spanish (intermediate), German (beginner), Portuguese (survival)</Typography>
            </ListItem>
        </List>
    <br/>
    <Typography variant="h4">
       Current Courses 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">Third Year</Typography>: 
                Algorithmics 1 (H), Interactive Systems (H), Prof Software Development (H), Data Fundamentals (H), Systems Programming (H), 3rd Year Team Project (H)
                </Typography>
            </ListItem>
        </List>
    <br/>
    <Typography variant="h4">
       Past Courses 
        </Typography>
        <List align='left'>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">First Year</Typography>: 
                Introduction to Computational Thinking, Computing Systems, Mathematics, Digital Media and Information Studies
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant='body1'>
                <Typography component ={'span'} sx={{textDecoration: 'underline'}} display="inline">Second Year</Typography>:
                Java Programming, Algorithm Foundations, Networks and Operating Systems, Algorithms and Data Structures, 
                Object Oriented Software Engineering, Web App Development, Economics, Economic and Social History, Portuguese 
                </Typography>
            </ListItem>
        </List>
    </Box>
    </Container>
    </main>
  )
}

export default Contact