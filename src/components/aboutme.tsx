import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import headshot from "./../headshot.jpeg"
function AboutMe(){
  return(
    <Box >
      <Typography  variant = "h4" component="div" sx ={{flexGrow:1}}>
        About me!
      </Typography>
      <Container maxWidth="sm" sx = {{bgcolor: '#cfe8fc', width: '250px', height: '200px', mt: '15px',mb: '15px'}}>
        Picture
      </Container>

      <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris. Tellus orci ac auctor augue mauris augue neque gravida. Tellus pellentesque eu tincidunt tortor aliquam. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Magna ac placerat vestibulum lectus mauris ultrices eros. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Gravida cum sociis natoque penatibus et magnis dis parturient. Euismod in pellentesque massa placerat. Neque viverra justo nec ultrices dui sapien eget mi proin. Justo laoreet sit amet cursus sit. Et leo duis ut diam quam nulla porttitor.

      </Typography>
    </Box>


  )
}
export default AboutMe; 