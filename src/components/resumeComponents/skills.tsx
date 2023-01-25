import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Skills(){
  return (
    <Box>
       <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u>SKILLS</u></b>
          </Typography>

            <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}> 
            <ul>
              <li>
                Programming Languages: Java, JavaScript, TypeScript, Python, C++, Jinja, HTML, CSS
              </li>
              <li>
                Libraries: Material UI, react, Amplify, MathJS
              </li>
              <li>
                Framework: React, Flask
              </li>
              <li>
                Github
              </li>
              <li>
                AWS
              </li>
            </ul>
            </Typography>
    </Box>
  )
}
export default Skills; 