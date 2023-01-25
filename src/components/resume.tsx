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
            <b><u>EDUCATION</u></b>
            <br></br> <b>University of North Carolina - Wilmington | December 2022 </b>
          </Typography>
              <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
                Related completed courses: Object Oriented Programming & Design, Introduction to Data Structures, Design & Analysis of Algorithms, Operating Systems, Database Design & Implementation
              </Typography>
            <br></br>
          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
              <b>Sandhills Community College</b>
          </Typography>
            <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
                Associates Degree in Science
                <br></br> GPA: 3.5
            </Typography>



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




          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u>WORK EXPERIENCE</u></b>
          <br></br>
          <b>Software Engineer</b>, Heads Together Health | Remote | <b>June 2022 - Present </b>
          </Typography>

              <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
                <ul>
                  <li>
                    Developing  website with React, Amplify, Material UI, where users can cretae an account to view sports injury data from the last 20 years. Working with Datalys and graduates from Harvard, USC and Duke that are in the health and data field.
                  </li>
                  <li>
                    Developed <a href= "www.headstogetherhealth.com"> company website </a>using Square Space  
                  </li>
                  <li>
                    Position acquired through Upwork (free-lance employment platform)
                  </li>
                </ul>
              </Typography>

          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}> 
          <b>Software Engineer Intern</b>, Carova Labs | Wilmington, NC | <b>August 2021 - August 2022</b>
          </Typography>

          <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
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



          <Typography variant = "h5" align = "left" component="div" sx ={{flexGrow:1}}>
          <b><u>CAMPUS INVOLVEMENT | HONORS</u></b>
          </Typography>

          <Typography variant = "h6" align = "left" component="div" sx ={{flexGrow:1}}>
            Dean's List 2019-2020 | Distinguished Engagement - UNCW Cornerstone Award | Secretary/Treasurer for Student Government Association | Co-Director of Community Engagement Specialists | Member of W.I.S.E (Women in Stem) | Member of UNCW Club Tennis

          </Typography>
    </Box>

  )
}
export default Resume;