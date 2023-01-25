import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Projects(){
  return (
    <Box>
       <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
            <b><u>RELEVANT PROJECTS</u></b>
            <br></br> <b>Project Name</b>
          </Typography>

            <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
              <ul>
                <li>
                  DogLog (Fall 2022)
                  <ol>
                    - Web application intended for dog owners to keep track of their dogs' health. Users can create a pet profile that will contain the dog's date of birth, weight, medications and health records. 
                  </ol>
                  <ol>
                    - Project manager in a team of six.
                  </ol>
                  <ol>
                    - Python, HTML, CSS, JavaScript, Jinja, Flask, Agile Methodology, SQLite
                  </ol>
                </li>

                <li>
                Calculus I Calculator (Spring 2022)
                  <ol>
                    - Created a calculator that solves simple, algebraic and derivative expressions.
                  </ol>
                  <ol>
                    - Accomplished with the help of my mentor at Carova Labs.
                  </ol>
                  <ol>
                    - TypeScript, Material UI, React, MathJS
                  </ol>
                </li>

                <li>
                   <a href= "https://ksuid.net"> K-Sortable ID Generator (Fall 2021) </a>
                  <ol>
                    - Created a site that generates globally unique IDs and contains a time component.
                  </ol>
                  <ol>
                    - Accomplished with the help of my mentors at Carova Labs
                  </ol>
                  <ol>
                    - TypeScript, Material UI, React, AWS
                  </ol>
                </li>
              </ul>
            </Typography>
      
    </Box>

  )
}
export default Projects; 