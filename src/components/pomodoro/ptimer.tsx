import Box from '@mui/material/Box';
import React, { useState, useRef, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Ptimer() {
  return(
  <Box sx = {{mt: '20px'}}>
    <TextField id="outlined-basic" label="Enter a time" variant="outlined" />
    <Button variant="contained">Start Timer</Button>
  </Box>
  )

  

}
export default Ptimer; 