import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Education from './resumeComponents/education';
import Skills from './resumeComponents/skills';
import Projects from './resumeComponents/projects';
import Experience from './resumeComponents/experience';
import Involvement from './resumeComponents/involvement';

import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, BACKGROUND_COLOR } from './colors';
function Resume (){
  return(
    <Box  mt = '20px' >
        <Container sx = {{backgroundColor: PRIMARY_COLOR ,p:1, borderRadius: 1}}>
          <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                2025 Resume
              </Typography>
        </Container>

        <Container sx = {{backgroundColor:'white'}}>
          <Experience></Experience>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects> 
          <Involvement></Involvement>
        </Container>
    </Box>

  )
}
export default Resume;