import { Box, Grid } from "@mui/material";
import Appbar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Stack } from "@mui/system";

import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, BACKGROUND_COLOR } from '../colors';
  
const Navbar = () => {
  return (
  <Box sx ={{backgroundColor: PRIMARY_COLOR}}>
    <Grid  container direction="row" justifyContent="center" alignItems="center" spacing = {1}>
      <Grid xs = {12} md = {4}> 

        <Typography variant = "h6" sx ={{ color: 'white', ml: '20px'}}>
          Natalie Harrison
        </Typography>
      </Grid>

    

      <Grid xs ={12} md = {4}>
       

        <Stack direction = "row" spacing = {2}> 

                <Button variant="text" sx = {{textTransform: 'none'}}>
                  <Link to= "/" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1" component="div" sx ={{ color: 'white'}}>
                    Home
                    </Typography>
                    </Link>
                </Button>
               

                <Button variant="text" sx = {{textTransform: 'none'}}>
                  <Link to= "/about" style={{ textDecoration: 'none' }}>
                    
                  <Typography variant = "subtitle1"  sx ={{ color: 'white'}}>
                    About
                  </Typography>
                  
                  </Link>
                </Button>
            

                <Button variant="text" sx = {{textTransform: 'none'}}>
                  <Link to= "/resume" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1"  sx ={{ color: 'white'}}>
                      Resume
                    </Typography>
                  </Link>
                </Button>

                <Button variant="text" sx = {{textTransform: 'none'}}>
                  <Link to= "/tools" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1" sx ={{ color: 'white'}}>
                      Tools
                    </Typography>
                    
                    </Link>
                </Button>
          </Stack>
     
      </Grid>
         

      <Grid xs ={12} md = {4}>
            <Stack  direction="row"  alignItems="center"   spacing={1} sx = {{ml :'20px'}}>
  
              <IconButton  href='https://github.com/NatalieHarrison' sx = {{textTransform: 'none', backgroundColor: SECONDARY_COLOR, mt: '5px', mb: '5px'}}>
                <GitHubIcon/>
              </IconButton>

              <IconButton  href="https://www.linkedin.com/in/natalieharrison45"  sx = {{textTransform: 'none', backgroundColor: SECONDARY_COLOR  }}>
                <LinkedInIcon/>
              </IconButton>

              <Typography sx ={{color: 'white'}}>
                Projects: 
              </Typography>

              <Button href="https://www.studiance.com"  sx = {{textTransform: 'none', backgroundColor: SECONDARY_COLOR  }}>
                <Typography sx = {{color: 'white'}}>
                  Studiance
                </Typography>
              </Button>

              <Button href="https://ksuid.net"  sx = {{textTransform: 'none', backgroundColor: SECONDARY_COLOR  }}>
                <Typography sx = {{color: 'white'}}>
                  KSuid
                </Typography>
              </Button>

              <Button  href="https://www.headstogetherhealth.com"   sx = {{textTransform: 'none', backgroundColor: SECONDARY_COLOR  }}>
                <Typography sx = {{color: 'white'}}>
                  Heads Together Health
                </Typography>
              </Button>
            </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
  
export default Navbar;