import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
import Grid from '@mui/material/Grid';

import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, BACKGROUND_COLOR } from './colors';
function AboutMeCopy(){
  return(
      <Box sx = {{mt: '20px', height: '100vh'}}>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid xs = {11} md = {8}>

            <Container sx = {{backgroundColor: PRIMARY_COLOR, mb: '20px',p:1, borderRadius: 1}}> 
              <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                About Me
              </Typography>
            
            </Container>
            </Grid>
    
    
      <Grid xs = {11} md = {8} sx = {{ backgroundColor: 'white', p: 1 ,borderRadius: 1}}>

        <Typography textAlign='center'>
          <b>Why I chose computer science: </b>
          <br></br>
          In 2012, at the age of 12, I began my coding journey by learning my first language, HTML. It all began when I wanted to modify the appearance of a blog I was running. Starting with templates, I soon found myself making tiny adjustments that gradually transformed into significant modifications. At the time, it was only an after-school activity I enjoyed, never thinking much of it.
          <br></br>
          <br></br>
          In early 2020, as I contemplated my college major, I felt a pull towards Computer Science. The allure of problem-solving and the potential to create transformative technologies held my interest. It was a visit to the Kennedy Space Center, where I witnessed the first crewed flight launch from SpaceX, that solidified my decision. In that moment, I knew that Computer Science was my true calling.
          <br></br>
          <br></br>
          From then on, my life's purpose became clear - to be part of a team that builds technology propelling humanity forward and leaving an undeniable mark on history. This goal drives me every day as I pursue my studies in Computer Science. 
        </Typography>

      </Grid>

      
      <Grid xs = {11} md = {8} sx = {{mt: '10px', backgroundColor: 'white'  ,p: 1 ,borderRadius: 1}}>  

        <Typography textAlign='center' > 
        <b> How did I build this website?</b>
        <br></br>
        Adopting the principles of the scrum methodology, I used GitHub to outline the development of this website. There, I created a summary, a protoype, and a list of features I wanted to include. The repository can be viewed <a href = "https://github.com/NatalieHarrison/harrison-site"> here</a>. 

        Once the groundwork was set, I constructed the project's skeleton, refined elements until I achieved the layout, keeping functionality and user experience in mind. 

        I used AWS for deployment and Go Daddy to secure a domain name, React as the framework and Typescript as the primary language.
        </Typography>
      </Grid>

      <Grid xs = {11} md = {8} sx = {{mt: '10px', backgroundColor: 'white', display: 'flex', p: 1, borderRadius: 1}}>  
        <br></br> <Typography textAlign='left' >
          <b> Fun facts: </b>
          <ul>
            <li>
              My favorite book series is Dune and I am excited for the new movie coming out soon!
            </li>
            <li>
              In December 2022, I ran my first half-marathon and would like to do more in the future. 
            </li>
            <li>
              I've always been a bit of a gamer and my all time favorites are The Sims, Call of Duty: Black Ops 2, and The Last of Us. 
            </li>
            <li>
              I enjoy solving puzzles, only puzzles that have 500+ pieces though. Anything less is too easy!
            </li>
          </ul>
        </Typography>
        </Grid>

      </Grid>
      
      </Box>

  )
}
export default AboutMeCopy; 