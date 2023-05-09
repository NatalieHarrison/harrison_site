import { Box, Typography} from "@mui/material";
import TimerTool from "./timer/timerTool";

function Tools() {  
  return (
    <div className="App">

      <Box sx = {{ml: '20px'}}>
      <Typography variant = "h5" component="div" sx ={{flexGrow:1}}>
            Tools
          </Typography>

            <TimerTool ></TimerTool>
      </Box>
    </div>
  );
}

export default Tools;


