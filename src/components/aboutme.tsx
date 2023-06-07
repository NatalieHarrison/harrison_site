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


            <Container sx = {{backgroundColor: '#ED6A5A', mb: '20px',p:1, borderRadius: 1}}> 
              <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
                About Meee
              </Typography>

    
  
      </Grid>
      
      </Box>

  )
}
export default AboutMe; 