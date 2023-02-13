import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Footer(){

  return(
    <Box sx = {{mb: 5}}>
      <u>Links</u>
      <Stack  direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <Button variant = "contained" href='https://github.com/NatalieHarrison' sx = {{textTransform: 'none' }}>
          GitHub
        </Button>
  
          
        <Button variant = "contained" href="www.linkedin.com/in/natalieharrison45"  sx = {{textTransform: 'none' }}>
          LinkedIn
        </Button>

        <Button variant = "contained" href="https://ksuid.net"  sx = {{textTransform: 'none' }}>
          KSuid
        </Button>

        <Button variant = "contained" href="https://www.headstogetherhealth.com"  sx = {{textTransform: 'none' }}>
          Heads Together Health
        </Button>
         
     
   
      
   
    

      </Stack>
  
    </Box>


  )
}
export default Footer; 