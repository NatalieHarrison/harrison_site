import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Skills(){
  return (
    <Box>
       <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u> TECHNICAL SKILLS</u></b>
          </Typography>

            <Typography variant = "subtitle1" align = "left" component="div" sx ={{flexGrow:1}}> 
            <ul>
              <li>
                Programming Languages: JavaScript, TypeScript, Python, Java, HTML/CSS, SQL
              </li>
              <li>
                Framework: React, Flask, Django 
              </li>
              <li>
                Developer Tools: AWS, Amplify, Amplify Studio, Route 53, Git, Go Daddy, Visual Studio Code, PyCharm, IntelliJ
              </li>
              <li>
                Libraries: NumPy, MathJS, MaterialUI
              </li>
            </ul>
            </Typography>
    </Box>
  )
}
export default Skills; 