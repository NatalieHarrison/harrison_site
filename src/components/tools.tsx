import React, {useState}from "react";
import { Box, Button, Stack, IconButton, Typography, Grid } from "@mui/material";
import { Evaluate } from "./mathComponents/Evaluate";
import { Simplify } from "./mathComponents/Simplify";
import { Derivative } from "./mathComponents/Derive";



import ClickAwayListener from '@mui/material/ClickAwayListener';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { SxProps } from '@mui/system';
import { SymbolKeyboard } from "./mathComponents/SymbolKeyboard";


function Tools() {
  const [showSimplify, setShowSimplify] = useState(false);
  const [showDerivative, setShowDerivative] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  
  const styles: SxProps = {
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };  

  const handleClick1 = () => {
    setOpen1((prev) => !prev);
  };

  const handleClickAway1 = () => {
    setOpen1(false);
  };  

  
  const derivativeClick = () => {
    setShowDerivative(current => !current);
  }
  const simplifyClick = () => {
    setShowSimplify(current => !current);
  }

  
  return (
    <div className="App">

      <Box sx = {{ml: '20px'}}>
      <Typography variant = "h5" component="div" sx ={{flexGrow:1}}>
            Tools
          </Typography>
   
            <Evaluate></Evaluate> 
      
            <Stack direction = "row" spacing = {.5} sx = {{mt: '10px'}}>
              <div> 
                <Button variant = "outlined"
                onClick = {simplifyClick}>Simplify</Button>
                {showSimplify && (
                  <div>
                    <Simplify></Simplify>
                  </div>
                )}

                {showSimplify &&<Box/>}
              </div>

            <ClickAwayListener onClickAway={handleClickAway}>
              <Box sx={{ position: 'relative' }}>
                <IconButton type="button" onClick={handleClick}>
                <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                {open ? (
                  <Box sx = {styles}>
                    Used for adding, subtracting, multiplying and dividing expressions with variables
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>

            </Stack>
        
        
            <Stack  direction = "row" spacing = {.5}  sx = {{mt: '10px'}}>
            <div>
            <Button variant = "outlined" onClick = {derivativeClick}>Derivative</Button>
            <br></br>
            {showDerivative &&(
              <div>
                <Derivative></Derivative>
              </div>
            )}
          
            </div>

            <ClickAwayListener onClickAway={handleClickAway1}>
              <Box sx={{ position: 'relative' }}>
                <IconButton type="button" onClick={handleClick1}>
                <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                {open1 ? (
                  <Box sx = {styles}>
                    Used for solving derivatives
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener> 
            </Stack>
   
        
    
      </Box>
    </div>
  );
}

export default Tools;


