import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
import Grid from '@mui/material/Grid';
function AboutMeCopy(){
  return(
      <Box sx = {{mt: '20px', height: '100vh'}}>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid xs = {11} md = {8}>

            <Container sx = {{backgroundColor: '#ED6A5A', mb: '20px',p:1, borderRadius: 1}}> 
              <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                About Me
              </Typography>
            
            </Container>
            </Grid>
    
    
      <Grid xs = {11} md = {8} sx = {{ backgroundColor: 'white', p: 1 ,borderRadius: 1}}>

        <Typography textAlign='center'>
          <b>Why I chose computer science: </b>
          <br></br>
          In 2012, at 12 years old, I learned my first coding language, HTML. I was introduced to HTML when I wanted to change the appearance of a blog I was running. I started out using templates, but when the templates didn’t have exactly what I wanted, I began to make tiny adjustments that led to major adjustments. At the time, I never thought anything of it, it was only an after school activity I enjoyed. 
          <br></br>
          In early 2020,  I was leaning into choosing computer science as my college major. I felt drawn to computer science because I enjoyed problem solving and was interested in the technology that could be created by computer scientists'. Later that year, I was able to tour the Kennedy Space Center and see the Space X launch in Cape Canaveral, Florida. During this trip, I had realized choosing computer science was exactly what I was supposed to be doing. My life goal had become to be apart of a team that works to build technology that pushes humanity forward and watch it become apart of history.
        </Typography>

      </Grid>

      
      <Grid xs = {11} md = {8} sx = {{mt: '10px', backgroundColor: 'white'  ,p: 1 ,borderRadius: 1}}>  

        <Typography textAlign='center' > 
        <b> How did I build this website?</b>
        <br></br>
          Taking from the scrum methodology, I used GitHub to plan out this website. There I created a summary, a prototype, list of features I wanted to implement, the data required and more, which can be seen <a href = "https://github.com/NatalieHarrison/harrison-site"> at this link.</a> From there, I created a skeleton of the project and once I achieved the layout I wanted, I began making styling changes. I used AWS Amplify to deploy this website and GoDaddy to obtain a domain name, React as the framework and Typescript.     
        </Typography>
      </Grid>

      <Grid xs = {11} md = {8} sx = {{mt: '10px', backgroundColor: 'white', display: 'flex', p: 1, borderRadius: 1}}>  
        <br></br> <Typography textAlign='left' >
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
        </Grid>

      </Grid>
      
      </Box>

  )
}
export default AboutMeCopy; 