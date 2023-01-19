import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Resume (){
  return(
    <Box>
       <Typography variant = "h4" component="div" sx ={{flexGrow:1}}>
            2023 Resume
          </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            Education
          </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            Skills
          </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            Relevant Projects
          </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            Work Experience
          </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            Campus Involvement | Honors
          </Typography>
    </Box>

  )
}
export default Resume;