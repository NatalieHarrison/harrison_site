import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function Reviews(){
  return(
    <Box>
      <Container>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Company (optional)" variant="outlined" />
      </Container>
      <TextField id="outlined-basic" label="Share details of your own experience with me"  multiline rows = {5} variant="outlined" />
      <Button variant = "contained">Submit</Button>

    </Box>


  )
}
export default Reviews;