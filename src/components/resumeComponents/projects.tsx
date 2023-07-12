import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Projects(){
  return (
    <Box>
       <Typography variant = "h6" >
            <b><u>RELEVANT PROJECTS</u></b>
            <br></br> <b>Project Name</b>
          </Typography>

            <Typography variant = "body1" >
              <ul>
                <li>
                  DogLog | <i>JavaScript, Python, Jinja, Flask, SQLite, HTML/CSS, Agile Methodology </i>| <b> Fall 2023 </b>
                  <ol>
                    - Web application intended for dog owners to keep track of their dogs' health. Users can create a pet profile that will contain the dog's date of birth, weight, medications and health records. 
                  </ol>
                  <ol>
                    - Managed group of 5 students as Project Manager.
                  </ol>
             
                </li>

                <li>
                Calculus I Calculator |<i>Typescript, React, MathJS, Material-UI</i> | <b>  Spring 2022 </b>
                  <ol>
                    - Developed a calculator that solves simple expressions, algebraic expressions and derivatives.
                  </ol>
                  <ol>
                    - Accomplished with the help of my mentors, Sam Taylor and Lee Gilliam.
                  </ol>
                </li>

                <li>
                   <a href= "https://ksuid.net"> K-Sortable ID Generator </a>| <i> TypeScript, React, AWS, Material-UI </i> | <b>Fall 2021</b>
                  <ol>
                    - Developed a website that generates globally unique IDs and contains a time component.
                  </ol>
                  <ol>
                    - Accomplished with the help of my mentors, Sam Taylor and Lee Gilliam.
                  </ol>
                </li>
              </ul>
            </Typography>
      
    </Box>

  )
}
export default Projects; 