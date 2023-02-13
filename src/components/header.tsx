import * as React from 'react';
import Appbar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
function Header(){
  return(
    <Box sx ={{flexGrow:1}}>
      <Appbar position="static">
        <Toolbar sx ={{backgroundColor: '#1C3879'}}>
          <Typography variant = "h6" component="div" sx ={{flexGrow:1, color: '#F9F5EB'}}>
            Natalie Harrison
          </Typography>
        </Toolbar>
      </Appbar>



    </Box>

  );
}
export default Header;