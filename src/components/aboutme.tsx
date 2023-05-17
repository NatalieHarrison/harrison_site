import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
function AboutMe(){
  return(
    <div>
      <Container sx = {{backgroundColor: '#E49273', height: '150px', mt: '20px'}}> 
        <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
          About Me
        </Typography>

        <Typography variant = 'subtitle1' align = 'center' sx  = {{mr: '160px', ml: '160px', color: 'white'}}>
          <b>Hello,  I am Natalie Harrison and welcome to NatalieHarrison.org! </b>
          <br></br>
            This website serves as a place to not only showcase my work as a student of computer science, but also as a place for employers to learn more about my personality, hobbies and life outside of computer science. 
        </Typography>
      
      </Container>
    
    <Box sx = {{ml: '20px', mr: '20px'}}>

      <Typography textAlign='left' sx = {{ml: '10px'}}>
        <b>Why I chose computer science: </b>
        <br></br>
        In 2012, at 12 years old, I learned my first coding language, HTML. I was introduced to HTML when I wanted to change the appearance of a blog I was running. I started out using templates, but when the templates didn’t have exactly what I wanted, I began to make tiny adjustments that led to major adjustments. At the time, I never thought anything of it, it was just something I enjoyed doing after school. 
        <br></br>
        In early 2020,  I was leaning into choosing computer science as my college major. I felt that computer science was extremely fascinating and a field where I could thrive and make meaningful impact with my work. Later that year, I was able to tour the Kennedy Space Center and see the Space X launch in Cape Canaveral, Florida. During this trip, I had realized choosing computer science was exactly what I was supposed to be doing. My life goal had become to be apart of a team that works hard to build technology that pushes humanity forward and watch it become apart of history.
      </Typography>
      <br></br>
      
      <br></br>

      <Typography textAlign='left' sx = {{ml: '10px'}}> 
      <b> How did I build this website?</b>
      <br></br>
        Taking from the scrum methodology, I used GitHub to plan out this website. There I created a summary, a prototype, list of features I wanted to implement, the data required and more, which can be seen <a href = "https://github.com/NatalieHarrison/harrison-site"> at this link.</a> From there, I created a skeleton of the project and once I achieved the layout I wanted, I began making styling changes. I used AWS Amplify to deploy this website and GoDaddy to obtain a domain name, React as the framework and Typescript.     
      </Typography>

      <br></br> <Typography textAlign='left' sx = {{ml: '10px'}}>
        <b> Fun facts: </b>
        <ul>
          <li>
            My favorite book series is Dune.
          </li>
          <li>
            I recently ran my first half-marathon in December, 2022. My goal this year is to run two half-marathons and one marathon. I also enjoy playing tennis, yoga, weight lifting, hiking and walking my dogs. 

          </li>
          <li>
            I love playing videos games and my favorites are the Sims, Call of Duty: Black Ops 2 and The Last of Us. 
          </li>
          <li>
            When I am not solving coding problems, I enjoy solving puzzles.
          </li>
        </ul>

      </Typography>
      
    </Box>
    </div>


  )
}
export default AboutMe; 