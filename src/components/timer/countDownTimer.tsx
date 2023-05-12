import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, {useState} from 'react'

interface ICountdown{
  hours: number;
  minutes: number;
  seconds: number;
}
const CountDownTimer = ({ hours = 0, minutes = 0, seconds = 60}:ICountdown) => {
  const [time, setTime] = React.useState<ICountdown>({hours,minutes,seconds});

  
  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      reset()
    else if (time.hours === 0 && time.seconds === 0){
      setTime({hours: time.hours, minutes: time.minutes-1, seconds: 59});}
    else if (time.minutes ===0 && time.seconds === 0){
      setTime({hours: time.hours-1, minutes: 59, seconds:59});
    } 
    else if(time.hours !== 0 && time.minutes !== 0 && time.seconds ===0){
      setTime({hours: time.hours-1, minutes:59, seconds: 59 })
    }
    else {
      setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1 })
    }
  }

  const reset = () => setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds})

  React.useEffect(() => {
    const timerId = setInterval (() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return(
    <Box>
      <p>
      {`${time.hours.toString().padStart(2, '0')}:${time.minutes
            .toString()
            .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
      </p>
    </Box>
  )

}
export default CountDownTimer; 