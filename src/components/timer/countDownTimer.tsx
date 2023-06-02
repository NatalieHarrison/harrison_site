import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, {useState} from 'react'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ICountdown{
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ hours = 0, minutes = 0, seconds = 60}:ICountdown) => {
  const [pause, setPause] = useState(false)
  const [play, setPlay] = useState(false)
  const [time, setTime] = React.useState<ICountdown>({hours,minutes,seconds});


  const tick = () => {
    if (pause == true){
      setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds})
    }
    else{
    
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      reset()
      else if((time.hours === 0 || isNaN(time.hours)) && time.seconds === 0 && time.minutes != 0){
        setTime({hours: 0 , minutes:time.minutes-1, seconds: 59})
      }
      else if(time.hours === 0 && time.minutes == 0 && time.seconds != 0){
        setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds-1})
      }
      else if (time.hours === 0 && time.minutes != 0 && time.seconds != 0){
        setTime({hours:time.hours, minutes: time.minutes, seconds: time.seconds-1})
      }
      else if ((time.minutes === 0 || isNaN(time.minutes)) && time.seconds === 0 && time.hours != 0){
        setTime({ hours:time.hours-1, minutes: 59, seconds: 59 })
      }
      else if (time.seconds === 0 && time.hours != 0 && time.minutes != 0){
        setTime({hours: time.hours, minutes: time.minutes-1, seconds: 59})
      }
      else if (time.minutes ===0 && time.hours != 0 && time.seconds != 0){
        setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds-1})
      }
      else if (time.hours != 0 && time.minutes != 0 && time.seconds !=0){
        setTime({hours:time.hours, minutes: time.minutes, seconds: time.seconds-1})
      }
    }

  }

  const reset = () => setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds})

  React.useEffect(() => {
    const timerId = setInterval (() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return(
    <Box>
      
      <Stack direction = "row">
      <p>
        {`${time.hours.toString().padStart(2, '0')}:${time.minutes
              .toString()
              .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
        </p>
        {!pause &&
        <Button variant="contained" onClick = {() => setPause(true)} sx = {{ml: '10px',backgroundColor: '#4699C2', ":hover": {
          bgcolor: '#55C5D1'
        } }}>
            <PauseIcon/>
        </Button>
}

        {pause && (
            <Button variant="contained" onClick = {() => setPause(false)} sx = {{ml: '10px', backgroundColor: '#4699C2', ":hover": {
              bgcolor: '#55C5D1'
            }}}>
              <PlayArrowIcon/>
            </Button>
        )}
      
        
      </Stack>
    </Box>
  )

}
export default CountDownTimer; 