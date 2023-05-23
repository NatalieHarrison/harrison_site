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
    <Box >
      <Container sx = {{backgroundColor:'white'}}>

        <Container sx = {{backgroundColor: '#ED6A5A',p:1, borderRadius: 1}}>
          <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                2023 Resume
              </Typography>
        </Container>

          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Experience></Experience>
          <Involvement></Involvement>

      </Container>

    </Box>

  )
}
export default Resume;