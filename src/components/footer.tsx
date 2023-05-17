import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Footer(){

  return(
    <Box sx = {{ backgroundColor: '#1C3879', height: '100px', width: '100%'}} position={'fixed'} bottom={0} >
        <Typography variant = "h5" sx = {{color: '#F9F5EB'}}>
            Links
        </Typography>
      <Stack  direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <Button variant = "contained" href='https://github.com/NatalieHarrison' sx = {{textTransform: 'none', backgroundColor: '#607EAA' }}>
          <Typography sx = {{color: '#F9F5EB'}}>
           GitHub
          </Typography>
        
        </Button>
        <Button variant = "contained" href="https://www.linkedin.com/in/natalieharrison45"  sx = {{textTransform: 'none', backgroundColor: '#607EAA'  }}>
          <Typography sx = {{color: '#F9F5EB'}}>
            LinkedIn
          </Typography>
        </Button>

        <Button variant = "contained" href="https://ksuid.net"  sx = {{textTransform: 'none', backgroundColor: '#607EAA'  }}>
          <Typography sx = {{color: '#F9F5EB'}}>
            KSuid
          </Typography>
        </Button>

        <Button variant = "contained" href="https://www.headstogetherhealth.com"  sx = {{textTransform: 'none', backgroundColor: '#607EAA'  }}>
          <Typography sx = {{color: '#F9F5EB'}}>
            Heads Together Health
          </Typography>
        </Button>
      </Stack>
    </Box>
  )
}
export default Footer; 