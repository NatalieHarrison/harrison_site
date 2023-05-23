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
  
const Navbar = () => {
  return (
  <Box >
      <Appbar position="static">
      <Grid>
        <Toolbar sx ={{backgroundColor: '#55C5D1'}}>
            <Grid xs = {2} md = {2}>
            <Typography variant = "h6" component="div" sx ={{ color: '#F9F5EB'}}>
              Natalie Harrison
            </Typography>
            </Grid>

            <Grid xs = {4} md = {4}>
              <ul style={{listStyle: 'none'}}>
              <Stack direction = "row" spacing = {3}>
                <li>
                  <Link to= "/" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                    Home
                    </Typography>
                    </Link>
                </li>

                <li>
                  <Link to= "/about" style={{ textDecoration: 'none' }}>
                    
                  <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                    About
                  </Typography>
                  
                  </Link>
                </li>

                <li>
                  <Link to= "/resume" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                      Resume
                    </Typography>
                  </Link>
                </li>

                <li>
                  <Link to= "/tools" style={{ textDecoration: 'none' }}>
                    <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                      Tools
                    </Typography>
                    
                    </Link>
                </li>
                </Stack>
              </ul>
              </Grid>
              
              <Grid xs = {4} md = {4}>
              <Stack  direction="row"  alignItems="center"   spacing={3} sx = {{ml :'20px'}}>
                <IconButton  href='https://github.com/NatalieHarrison' sx = {{textTransform: 'none', backgroundColor: '#4699C2' }}>
                  <GitHubIcon/>
                
                </IconButton>
                <IconButton  href="https://www.linkedin.com/in/natalieharrison45"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
                  <LinkedInIcon/>
                </IconButton>
      

            
                <Typography>
                  Personal Projects: 
                </Typography>
                <Button href="https://ksuid.net"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
                  <Typography sx = {{color: '#F9F5EB'}}>
                    KSuid
                  </Typography>
                </Button>

                <Button  href="https://www.headstogetherhealth.com"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
                  <Typography sx = {{color: '#F9F5EB'}}>
                    Heads Together Health
                  </Typography>
                </Button>
              </Stack>
              </Grid>
        </Toolbar>
        </Grid>
      </Appbar>
    </Box>
  );
};
  
export default Navbar;