import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
function TimerTool(){

  return(
    <Box>
      <Stack direction = "row" spacing={2} >
      <TextField id="outlined-basic" label="Hours" variant="outlined" sx = {{width: '60px'}}/>
      <TextField id="outlined-basic" label="Mins" variant="outlined" sx = {{width: '60px'}}/>
      <Button variant="contained">Start Timer</Button>
      </Stack>
    </Box>
  )
}
export default TimerTool; 