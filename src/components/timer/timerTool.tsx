import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, {useState} from 'react'
import CountDownTimer from './countDownTimer';

const TimerTool = () => {

  const [hrsInput, setHrsInput] = useState(0);
  const [minsInput, setMinsInput] = useState(0);
  


  return(
    <Box>


      <Stack direction = "row" spacing={2} >
      <TextField id="outlined-basic" label="Hours" variant="outlined" sx = {{width: '60px'}} value={hrsInput} />
      <TextField id="outlined-basic" label="Mins" variant="outlined" sx = {{width: '60px'}} value={minsInput} />
      <Button variant="contained">Start Timer</Button>
      <CountDownTimer hours = {hrsInput} minutes = {minsInput} seconds = {0}></CountDownTimer>
      </Stack>
    </Box>
  )

}
export default TimerTool; 