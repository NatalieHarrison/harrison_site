import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Skills(){
  return (
    <Box>
       <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u>SKILLS</u></b>
          </Typography>

            <Typography variant = "subtitle1" align = "left" component="div" sx ={{flexGrow:1}}> 
            <ul>
              <li>
                Programming Languages: JavaScript, TypeScript, Python, Java, C++, HTML, CSS, Jinja
              </li>
              <li>
                Libraries: Material UI, React, Amplify, MathJS
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