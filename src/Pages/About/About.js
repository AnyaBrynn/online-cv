import React from 'react'
import Carousel from 'better-react-carousel'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card'
import Container from '@mui/material/Container';

// image imports
import Bear from '../../assets/bear.jpg'
import Grad from '../../assets/graduation.jpg'
import Sweater from '../../assets/pinkSweater.jpg'
import Travelers from '../../assets/twoTravelers.jpg'
import TravelersPage from '../../assets/twoTravelersPage2.jpg'
import Characters from '../../assets/characterSheet.jpg'
import Torch from '../../assets/torchMan.jpg'
import Portrait from '../../assets/portrait.jpg'



import NavBar from '../../Components/NavBar/NavBar'

function About() {
  return (
    <div>
      <NavBar />
      <Container  sx={{width:"80%", pr:15}}>
        <CardContent sx={{width:"100%", p:5}} align='left'>
          <Typography>
            Although relatively new to computer science when starting university, over my education I have become passionate about the field. I enjoy the problem solving aspect of computing and am particularly interested in the human factor within technology. 
          </Typography>
          <br/>
          <Typography>
            In addition to being a 3rd year computing science student, I am a self-taught digital illustrator. From graphic design to digital oil paintings I have a diverse artistic skillset. I effectively work with clients to create what they envision. In the summer of 2020 I completed a passion project which included planning, creating, and publishing 2d animations to 56k followers on TikTok. 
          </Typography>
          <br/>
          <Typography>
            Growing up balancing sports and school, it was no surprise when I joined a sport that fulfilled my inner nerd, history geek, and athlete. I’m an active participant in Historical European Martial Arts. My two favourite disciplines within it are the Bolognese Sidesword and the German Longsword. I joined my university’s club and liked the community so much I’ve become its volunteer treasurer. 
          </Typography>
        </CardContent>
        <CardContent>
        <Carousel cols={2} rows={1} gap={10} loop >
          <Carousel.Item>
            <img width="100%" src={Travelers} alt="Two Travelers and a Bear cover art" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={TravelersPage} alt="Two men were traveling in company through wilderness" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Bear} alt="bear with lightning powers" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Portrait} alt="portrait of a blonde haired man" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img width="100%" src={Grad} alt="congrats 2020 grads"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Sweater} alt="stylized drawing of a man wearing a pink sweater"/>
          </Carousel.Item> */}
          <Carousel.Item>
            <img width="100%" src={Characters} alt="character design of a tall man, bubbly younger sister, and bookish older sister"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={Torch} alt="adventurer lunging sideways with a torch"/>
          </Carousel.Item>
        </Carousel>
        </CardContent>
      </Container>

    </div>
  )
}

export default About