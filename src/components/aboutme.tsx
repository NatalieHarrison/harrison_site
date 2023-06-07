import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
import Grid from '@mui/material/Grid';
function AboutMe(){
  return(
      <Box sx = {{mt: '20px', backgroundColor: '#ED6A5A', mb: '20px',p:1, borderRadius: 1}}>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid xs = {11} md = {12}>


        
              <Typography variant = 'h5' align = "center" sx = {{color: 'white', mb: '10px'}}>
                Hi, I'm <b>Natalie Harrison</b>! 
              </Typography>

              <Typography variant = 'h5' align = "center" sx  = {{ color: 'white', mb: '10px'}}>
                A <b>Senior Computer Science student</b> at the University of North Carolina - Wilmington.
              </Typography>

              <Typography variant = 'h5' align = "center" sx  = {{ color: 'white'}}>
                Extremely willing to learn every aspect of coding and use it to create innovative technology.
                My specific interests in the field are software development, engineering, artificial intelligence and autonomy.
              </Typography>

        
            </Grid>
    
  
      </Grid>
      
      </Box>

  )
}
export default AboutMe; 