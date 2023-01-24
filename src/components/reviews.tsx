import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; 
function Reviews(){
  return(
    <Box>
      <Grid container spacing={2}>
        <Grid xs = {6}>
          <Container>
            <Stack  direction="row" justifyContent="flex-start" alignItems="center" spacing={2} sx = {{mb: 1}}>
              <TextField id="outlined-basic" label="Name" variant="outlined" sx = {{width: 240}} />
              <TextField id="outlined-basic" label="Company (optional)" variant="outlined" sx = {{width: 240}}/>
            </Stack>
            <Stack  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
              <TextField id="outlined-basic" label="Share details of your experience with Natalie"  multiline rows = {5} variant="outlined" sx = {{width: 500}} />
              <Button variant = "contained">Submit</Button>
            </Stack>
          </Container>
      </Grid>

      <Grid xs = {6}></Grid>

      </Grid>
    </Box>


  )
}
export default Reviews;