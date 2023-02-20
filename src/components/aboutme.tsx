import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
function AboutMe(){
  return(
    <Box sx = {{ml: '20px', mr: '20px'}}>
      <Typography  variant = "h5" component="div" sx ={{flexGrow:1}}>
        About me
      </Typography>


      <Typography sx  = {{mr: '5px', ml: '5px'}}>
        <b>Hello,  I am Natalie Harrison and welcome to NatalieHarrison.net</b>
        <br></br>
          This website serves as a place to not only showcase my work as a student of computer science, but also as a place for employers to learn more about my personality, hobbies and life outside of computer science. 
      </Typography>
        <br></br>

      <Typography textAlign='left' sx = {{ml: '10px'}}>
        <b>Why I chose computer science: </b>
        <br></br>
        In 2012, at 12 years old, I learned my first coding language, HTML. I was introduced to HTML when I created a blog and wanted to change the appearance of the blog. I started out using templates, but when the templates didn’t have exactly what I wanted, I began to make tiny adjustments that led to major adjustments. At the time, I never thought anything of it, it was just something I enjoyed doing after school. 
        <br></br>
        In early 2020,  I was leaning into choosing computer science as my college major. I felt that computer science was extremely fascinating and a field where I could thrive and make a meaningful impact with my work. Later that year, I was able to tour the Kennedy Space Center and see the Space X launch in Cape Canaveral, Florida. During this trip, I had realized choosing computer science was exactly what I was supposed to be doing. My life goal had become to be apart of a team that works hard to build technology and watch it become apart of history. and working hard to watch it become apart of history. 
      </Typography>
      <br></br>
      
      <br></br>

      <Typography textAlign='left' sx = {{ml: '10px'}}> 
      <b> How did I build this website?</b>
      <br></br>
        Taking from the scrum methodology, I used GitHub to plan out this website. There I created a summary, a prototype, list of features I wanted to implement, the data required and more, which can be seen <a href = "https://github.com/NatalieHarrison/harrison-site"> at this link.</a> From there, I created a skeleton of the project and once I achieved the layout I wanted, I began making styling changes. I used AWS Amplify to deploy this website, React as the framework and Typescript.     
      </Typography>

      <br></br> <Typography textAlign='left' sx = {{ml: '10px'}}>
        <b> Hobbies: </b>
        <ul>
          <li>
            Reading
          </li>
          <li>
            Running
          </li>
          <li>
            Playing video games
          </li>
          <li> 
            Tennis
          </li>
          <li>
            Walking my dogs 
          </li>
          <li>
            Volunteer work 
          </li>
          <li>
            Puzzles
          </li>
        </ul>

      </Typography>
      
    </Box>


  )
}
export default AboutMe; 