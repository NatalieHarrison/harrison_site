import { Box, Container, Grid, Stack, Typography} from "@mui/material";
import TimerTool from "./timer/timerTool";
import DisplayCalculator from "./mathComponents/displayCalculator";
import ToDoList from "./todolist";

function Tools() {  
  return (
    <div className="App">

      <Box ml = '20px' mb = '150px' mt = '20px' >
      <Container sx = {{backgroundColor: '#ED6A5A',p:1, borderRadius: 1}}>
          <Typography variant = 'h4' align='center' sx = {{color: 'white'}}>
              Tools
          </Typography>
        </Container>
      <Container sx = {{backgroundColor:'white'}}>

        <Grid container direction = "row" >

          <Grid xs = {12} md = {4}>

            <Typography variant = "h6">
              Calculator
            </Typography>
            <DisplayCalculator/>
          </Grid>


          <Grid xs = {12} md = {4} >
            <Typography variant = "h6" sx = {{mb: '15px'}}>

              Countdown Timer
            </Typography> 
            <TimerTool/>
          </Grid>
          
          <Grid xs = {12} md = {4}>
            <ToDoList/>
          </Grid>

        </Grid>
        
        </Container>
      </Box>
    </div>
  );
}

export default Tools;


