import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Education from './resumeComponents/education';
import Skills from './resumeComponents/skills';
import Projects from './resumeComponents/projects';
import Experience from './resumeComponents/experience';
import Involvement from './resumeComponents/involvement';
function Resume (){
  return(
    <Box>
       <Typography variant = "h5" component="div" sx ={{flexGrow:1}}>
            2023 Resume
          </Typography>
          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Experience></Experience>
          <Involvement></Involvement>

    </Box>

  )
}
export default Resume;