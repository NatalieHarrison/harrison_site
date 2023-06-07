import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Education from './resumeComponents/education';
import Skills from './resumeComponents/skills';
import Projects from './resumeComponents/projects';
import Experience from './resumeComponents/experience';
import Involvement from './resumeComponents/involvement';
function Resume (){
  return(
    <Box  mt = '20px' >
        <Container sx = {{backgroundColor: '#ED6A5A',p:1, borderRadius: 1}}>
          <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                2023 Resume
              </Typography>
        </Container>

        <Container sx = {{backgroundColor:'white'}}>
          <Education></Education>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects> 
          <Involvement></Involvement>
        </Container>

    </Box>

  )
}
export default Resume;