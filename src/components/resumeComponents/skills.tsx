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
                Programming Languages: JavaScript, TypeScript, Python, Java, HTML/CSS, SQL, C#
              </li>
              <li>
                Framework: Angular, React, .NET, EF Core
              </li>
              <li>
                Developer Tools: AWS, Amplify, Amplify Studio, Route 53, GitHub, Go Daddy, Visual Studio Code, PyCharm, IntelliJ, Visual Studio, Claude Code
              </li>
            </ul>
            </Typography>
    </Box>
  )
}
export default Skills; 