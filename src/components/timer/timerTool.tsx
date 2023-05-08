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
    setTimer(current => !current)
  }
  return(
    <Box>


      <Stack direction = "row" spacing={2} >

      <TextField id="outlined-basic" label="Hours" variant="outlined" sx = {{width: '60px'}} value={hrsInput} onChange={(e) => setHrsInput(e.target.value)}/>
      <TextField id="outlined-basic" label="Mins" variant="outlined" sx = {{width: '60px'}} value={minsInput} onChange={(e) => setMinsInput(e.target.value)} />


      <Button
       variant="contained" 
       onClick = {startTimerClick}>
        Start Timer
      </Button>
      {startTimer && (
        <div>
          <CountDownTimer hours = {parseInt(hrsInput)} minutes = {parseInt(minsInput)} seconds = {0}></CountDownTimer>
        </div>
      )}
      {/* <CountDownTimer hours = {parseInt(hrsInput)} minutes = {parseInt(minsInput)} seconds = {0}></CountDownTimer> */}

      </Stack>
    </Box>
  )

}
export default TimerTool; 