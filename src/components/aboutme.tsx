import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
function AboutMe(){
  return(
      <Box sx = {{mt: '20px', backgroundColor: '#ED6A5A', mb: '20px',p:1, borderRadius: 1}}>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid xs = {11} md = {12}>


            <Container sx = {{backgroundColor: '#ED6A5A', mb: '20px',p:1, borderRadius: 1}}> 
              <Typography variant = 'h5' align='center' sx = {{color: 'white', mb: '10px'}}>
                Hi, I'm <b>Natalie Harrison</b>!
              </Typography>

              <Typography variant = 'h5' align='left' sx = {{color: 'white', mb: '10px'}}>
                I'm a student studying <b>Computer Science</b> at the University of North Carolina - Wilmington.
              </Typography>

              <Typography variant = 'h5' align='left' sx = {{color: 'white', mb: '10px'}}>
                Interested in the fields of <b>software development, engineering, artificial intelligence and autonomy</b>. 
                Extremely willing to learn every aspect of coding and use it to create innovative technology.
              </Typography>
              
              <Stack direction = "row" justifyContent="center"
  alignItems="center"> 
                <Typography variant = 'h6' align='left' sx = {{color: 'white', mr: '5px'}}> Learn more about me </Typography> 
                <Button variant='contained'  sx = {{backgroundColor: 'white', textTransform: 'none', ":hover": {bgcolor: 'white'}}}>
                  <Link to= "/about" style={{ textDecoration: 'none' }}>
                    <Typography color={'#ED6A5A'}>
                      here!
                    </Typography>
                  </Link>
               </Button>
              </Stack>
            </Container>
            </Grid>

    
  
      </Grid>
      
      </Box>

  )
}
export default AboutMe; 