import { Box, Container, Stack, Typography} from "@mui/material";
import TimerTool from "./timer/timerTool";
import DisplayCalculator from "./mathComponents/displayCalculator";

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

        <Stack direction = "row" spacing ={10}>
          <Stack direction = "column">
            <Typography variant = "h6">
              Calculator
            </Typography>
            <DisplayCalculator/>
          </Stack>

          <Stack direction = "column" spacing = {2}>
            <Typography variant = "h6">
              Countdown Timer
            </Typography> 
            <TimerTool/>
          </Stack>
          
        </Stack>
        
        </Container>
      </Box>
    </div>
  );
}

export default Tools;


