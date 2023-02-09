import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
function Footer(){

  return(
    <Box sx = {{mb: 5}}>
      Links
      <Stack  direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
     
          <a href = "https://github.com/NatalieHarrison"> GitHub</a>
     
          <a href = "www.linkedin.com/in/natalieharrison45" >LinkedIn </a>
     
          <a href= "https://ksuid.net"> KSuid</a>
      
          <a href = "https://www.headstogetherhealth.com"> Heads Together Health</a>
    

      </Stack>
  
    </Box>


  )
}
export default Footer; 