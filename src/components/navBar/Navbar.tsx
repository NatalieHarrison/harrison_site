import { Box } from "@mui/material";
import Appbar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Stack } from "@mui/system";
  
const Navbar = () => {
  return (
  <Box >
      <Appbar position="static">
        <Toolbar sx ={{backgroundColor: '#1C3879'}}>
          <Typography variant = "h6" component="div" sx ={{ color: '#F9F5EB'}}>
            Natalie Harrison
          </Typography>
          
            <ul style={{listStyle: 'none'}}>
            <Stack direction = "row" spacing = {3}>
              <li>
                <Link to= "/">
                  <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                  Home
                  </Typography>
                  </Link>
              </li>

              <li>
                <Link to= "/about">
                  
                <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                  About
                </Typography>
                
                </Link>
              </li>

              <li>
                <Link to= "/resume">
                  <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                    Resume
                  </Typography>
                </Link>
              </li>

              <li>
                <Link to= "/tools">
                  <Typography variant = "subtitle1" component="div" sx ={{ color: '#F9F5EB'}}>
                    Tools
                  </Typography>
                  
                  </Link>
              </li>
              </Stack>
            </ul>
            
        </Toolbar>
      </Appbar>
    </Box>
  );
};
  
export default Navbar;