import { Box, Typography } from "@mui/material";
function Experience() {
  return (
    <Box>
      <Typography variant="h6">
        <b>
          <u>WORK EXPERIENCE</u>
        </b>
        <br></br>
        <b>Junior Software Developer </b>, PS Solutions | Wilmington, NC |{" "}
        <b>January 2024 - Present</b>
        <Typography variant="body1">
          <ul>
            {/* Figma  */}
            <li>
              Use Figma to collaborate on UI/UX design, create wireframes, and
              translate responsive designs into frontend components.
            </li>
          {/* Angular/Frontend */}

            <li>
              Build responsive, reusable UI components using HTML, SCSS and
              TypeScript with an Angular framework.
            </li>
          {/* Backend */}
            <li>
              Use C#, .NET and EF Core to integrate backend services with
              frontend Angular applications.
            </li>

            <li>
              Integrated RESTful APIs on both frontend and backend,
              including handling HTTP methods (GET, POST, PUT, DELETE) and
              handling errors.
            </li>

            <li>
              Utilize SQL for database interactions, ensuring accurate data
              retrieval.
            </li>

            <li>
              Configure Azure Function Apps to integrate with projects, enabling
              functionality like sending emails to be sent on a scheduled time.
            </li>

            <li>Create backup databases to ensure data protection.</li>

            <li>
              Experience in using GitHub Desktop to navigate branches, manage
              commits, and collaborate with team members on version-controlled
              projects.
            </li>

            <li>
              Github pull requests include summaries, descriptions of new
              features, and explanations of code changes.
            </li>
            <li>
              Familiarity with GitHub Actions for actions like checks with Prettier and
              incorporating AWS to update the production website.
            </li>
            <li>
              Participate in code reviews, incorporating received feedback to
              improve code quality and adhere to best practices.
            </li>

            <li>
              Applying practices such as pair programming, continuously
              refactoring, and delivering in small, incremental releases to
              enchance team collaboration and code maintainability.
            </li>

            <li>
              Create and maintain clear, concise documentation for projects,
              components and client-facing materials, actively documenting
              meetings.
            </li>

            <li>
              Conduct testing of applications throughout the development
              lifecycle, identifying and fixing bugs to ensure high-quality
              releases.
            </li>
          </ul>
        </Typography>
        <b>Website Application Developer, Intern </b>, Young Scientist Academy |
        Wilmington, NC | <b>September 2023 - December 2023 </b>
        <Typography variant="body1">
          <ul>
            <li>
              Developing organization website with tech stack: Python Django,
              Bootstrap and SQL.
            </li>
            <li>
              Lead technology and coding programs for elementary and middle
              school aged kids.
            </li>
          </ul>
        </Typography>
        <b>Software Engineer Intern</b>, Heads Together Health | Remote |{" "}
        <b>June 2022 - June 2023 </b>
      </Typography>

      <Typography variant="body1">
        <ul>
          <li>
            Built a dynamic React website with Amplify and Material UI,
            providing access to extensive sports injury data.
          </li>
          <li>
            Strong collaboration for ensuring functionality, design and UX
            throughout development.
          </li>
        </ul>
      </Typography>

      <Typography variant="h6">
        <b>Software Engineer Intern</b>, Carova Labs | Wilmington, NC |{" "}
        <b>August 2021 - August 2022</b>
      </Typography>

      <Typography variant="body1">
        <ul>
          <li>
            Gained extensive knowledge in React, demonstrating a comprehensive
            understanding of its concepts and best practices.
          </li>
          <li>
            Developed client communication skills, collaborated on UI designs,
            and provided timely progress updates.
          </li>
          <li>
            Demonstrated proficiency in Adobe XD, using it to create visually
            engaging and intuitive mock-ups.
          </li>
        </ul>
      </Typography>
    </Box>
  );
}
export default Experience;
