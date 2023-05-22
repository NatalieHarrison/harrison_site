import { Box, Stack, Typography} from "@mui/material";
import TimerTool from "./timer/timerTool";
import DisplayCalculator from "./mathComponents/displayCalculator";

function Tools() {  
  return (
    <div className="App">

      <Box ml = '20px' mb = '150px' >
        <Typography variant = "h5" component="div" sx ={{flexGrow:1}}>
            Tools
        </Typography>

        <Stack direction = "row" spacing ={10}>

          <Stack direction = "column">
            <Typography variant = "h6">
              Calculator
            </Typography>
            <DisplayCalculator/>
          </Stack>

          <Stack direction = "column" spacing = {2}>
            {/* <Typography variant = "h6">
              Countdown Timer
            </Typography> */}
            {/* <TimerTool/> */}
          </Stack>
          
        </Stack>
      </Box>
    </div>
  );
}

export default Tools;


