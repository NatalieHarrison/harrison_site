import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Experience(){
  return (
    <Box>
        <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u>WORK EXPERIENCE</u></b>
          <br></br>
          <b>Software Engineer</b>, Heads Together Health | Remote | <b>June 2022 - Present </b>
          </Typography>

              <Typography variant = "body1" align = "left" component="div" sx ={{flexGrow:1}}>
                <ul>
                  <li>
                    Developing  website with React, Amplify, Material UI, where users can create an account to view sports injury data from the last 20 years. Working with Datalys and graduates from Harvard, USC and Duke that are in the health and data field.
                  </li>
                  <li>
                    Developed <a href= "www.headstogetherhealth.com"> company website </a>using Square Space  
                  </li>
                  <li>
                    Position acquired through Upwork (free-lance employment platform)
                  </li>
                </ul>
              </Typography>

          <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}> 
          <b>Software Engineer Intern</b>, Carova Labs | Wilmington, NC | <b>August 2021 - August 2022</b>
          </Typography>

          <Typography variant = "body1" align = "left" component="div" sx ={{flexGrow:1}}>
            <ul>
              <li>
                Comprehensive knowledge of React
              </li>
              <li>
                Communication with clients for mock user interface and site development updates
              </li>
              <li>
                Continuous testing and integeration fo builds and releases
              </li>
              <li>
                Extensive experience with Material UI
              </li>
            </ul>
          </Typography>
    </Box>

  )
}
export default Experience; 