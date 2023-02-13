import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
function AboutMe(){
  return(
    <Box sx = {{ml: '20px'}}>
      <Typography  variant = "h4" component="div" sx ={{flexGrow:1}}>
        About me
      </Typography>
      <Container maxWidth="sm" sx = {{width: '250px', height: '200px', mt: '15px',mb: '15px'}}>
        <img src = {headshot} width = "200px"></img>
      </Container>

      <Typography sx  = {{mr: '5px', ml: '5px'}}>
        <b>Hello,  I am Natalie Harrison and welcome to NatalieHarrison.net!</b>
        <br></br>
          This website serves as a place to not only showcase my work as a student of computer science, but also as a place for employers to learn more about my personality, hobbies and life outside of computer science. 
      </Typography>
        <br></br>

      <Typography textAlign='left' sx = {{ml: '10px'}}>
        <b>Why I chose computer science: </b>
        <br></br>
        I spent my childhood a lot differently than the average child in the 2010’s. I had unlimited screen time and internet access, the best thing ever.. In 2011, I created a sports blog where I discovered HTML. I used templates at first and then finding that the templates didn’t match my ultimate vision, I began making tiny adjustments to the code that led to huge adjustments. This was my first taste of coding. 
        <br></br>
        <br></br>
        Fast forward 9 years later. At the end of 2019, a pivotal event that changed my outlook on life, happened to me. I began to discover my independence and how I could create the life that I wanted and not what I thought others expected of me. I fell in love with science and math. Using science to learn about the unknown and using math to solve the unknown; creating something to solve the problems driven by humanity. 
        <br></br>
        <br></br>
        I drove 8 hours on a whim with $200 and 2 of my best friends to the Space X launch in May 2020. That was the second pivotal moment in my life. I knew this was an event I wanted to be apart of one day. Not specifically Space X or space exploration, but being on a team to create technology and watching it become apart of history. These 3 past experiences, led me to choose computer science as part of my life’s work. 
      </Typography>
    </Box>


  )
}
export default AboutMe; 