
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Education(){
  return (
    <Box>
            <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
            <b><u>EDUCATION</u></b>
            <br></br> <b>University of North Carolina - Wilmington | December 2023 </b>
          </Typography>
              <Typography variant = "body1" align = "left" component="div" sx ={{flexGrow:1}}>
                Related completed courses: Object Oriented Programming & Design, Introduction to Data Structures, Design & Analysis of Algorithms, Operating Systems, Database Design & Implementation
              </Typography>
            <br></br>
          <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
              <b>Sandhills Community College</b>
          </Typography>
            <Typography variant = "subtitle1" align = "left" component="div" sx ={{flexGrow:1}}>
                Associates Degree in Science
                <br></br> GPA: 3.5
            </Typography>


    </Box>
  )
}
export default Education; 