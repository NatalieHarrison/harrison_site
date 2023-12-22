import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, {useState} from 'react'
import StopIcon from '@mui/icons-material/Stop';
import Typography from '@mui/material/Typography';

import CountDownTimer from './countDownTimer';
import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, BACKGROUND_COLOR } from '../colors';

const TimerTool = () => {  
  let [hrsInput, setHrsInput] = useState("");
  let [minsInput, setMinsInput] = useState("");
  let [startTimer, setTimer] = useState(false);
  const [open, setOpen] = useState(true)


  const startTimerClick = () => {
    setTimer(current => !current) //displays the timer and hides it when button clicks 
    // setResetTimer (current => !current)
    if (minsInput == ""){
      setMinsInput("0")
    }
    if (hrsInput == ""){
      setHrsInput("0")
    }
  }


  return(
    <Box sx = {{backgroundColor: PRIMARY_COLOR ,boxShadow: 8, width: '100%', borderRadius: 2, height: '35%'}}>

        <Box>
            <Grid container direction = 'row' justifyContent="center" alignItems="center"> 
              <Grid xs = {5} md = {5} >
                <Typography variant = 'h6'  color = 'white'> <b>Timer</b></Typography>
              </Grid>
            </Grid>

        {!startTimer &&
          <Grid container direction = "row" justifyContent='center' alignItems= "center" spacing={5} sx = {{mt: '10px', ml: '5px',mr: '10px'}}>
            <Grid xs = {4} md = {4}>
              <TextField  label="Hours" InputLabelProps={{shrink: true, }} variant="filled" sx = {{backgroundColor: 'white', borderRadius: 1, "& label.Mui-focused": {
              color: "#1b4332"},   "& .MuiFilledInput-underline:after": {borderBottomColor: "#1b4332"} }} value={hrsInput} onChange={(e) => setHrsInput(e.target.value)}/>
            </Grid> 

            <Grid xs = {4} md = {4} sx = {{ml:'10px'}}>
              <TextField  label="Mins"  InputLabelProps={{shrink: true,}} variant="filled" sx = {{backgroundColor: 'white', borderRadius: 1, "& label.Mui-focused": {
              color: "#1b4332"},   "& .MuiFilledInput-underline:after": {borderBottomColor: "#1b4332"}}} value={minsInput} onChange={(e) => setMinsInput(e.target.value)}
              />
            </Grid>
            <Grid xs = {3} md = {3}>
              <Button onClick = {startTimerClick} sx = {{color: 'white', backgroundColor: SECONDARY_COLOR, mb: '10px', ml: '5px'}} >
                <PlayArrowIcon/>
              </Button>
            </Grid>
          </Grid>
       
        }
      
        {startTimer && (
          <Box>
            <Grid container direction= "row" justifyContent='center' alignItems= "center" spacing = {2 }sx = {{mt: '10px', mb: '10px'}}>
              <Grid xs = {9} md = {9}>
                <CountDownTimer hours = {parseInt(hrsInput)} minutes = {parseInt(minsInput)} seconds = {0}></CountDownTimer>
              </Grid>
              <Grid xs = {9} md = {2}>
                <Button onClick = {startTimerClick} sx = {{color: 'white', backgroundColor: SECONDARY_COLOR, mb: '10px', ml: '10px'}}>
                  <StopIcon/>
                </Button>
              </Grid>
        
            </Grid>
          </Box>
        )}


      </Box>
    
    </Box>
  )

}
export default TimerTool; 