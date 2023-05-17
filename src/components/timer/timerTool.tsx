import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, {useState} from 'react'
import CountDownTimer from './countDownTimer';

const TimerTool = () => {  
  let [hrsInput, setHrsInput] = useState("");
  let [minsInput, setMinsInput] = useState("");
  let [startTimer, setTimer] = useState(false);



  const startTimerClick = () => {
    setTimer(current => !current) //displays the timer and hides it when button clicks 
    // setResetTimer (current => !current)
  }

  return(
    <Box>
      <Stack direction = "row" spacing={2} >

      <TextField id="outlined-number" label="Hours" InputLabelProps={{shrink: true, }} variant="outlined" sx = {{width: '60px'}} value={hrsInput} onChange={(e) => setHrsInput(e.target.value)}/>
      <TextField id="outlined-number" label="Mins"  InputLabelProps={{shrink: true,}} variant="outlined" sx = {{width: '60px'}} value={minsInput} onChange={(e) => setMinsInput(e.target.value)} />

      <Button
       variant="contained" 
       onClick = {startTimerClick}>
        Set/Reset Timer
      </Button>

      {startTimer && (
        <div>
          <CountDownTimer hours = {parseInt(hrsInput)} minutes = {parseInt(minsInput)} seconds = {0}></CountDownTimer>
        </div>
      )}


      </Stack>
    </Box>
  )

}
export default TimerTool; 