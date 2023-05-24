import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){

  return(
    <Box sx = {{ backgroundColor: '#55C5D1', height: '100px', width: '100%'}} position={'fixed'} bottom={0} >
        <Typography variant = "h5" align = 'center' sx = {{color: '#F9F5EB', mt: '5px'}}>
            Links
        </Typography>
      <Stack  direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <IconButton  href='https://github.com/NatalieHarrison' sx = {{textTransform: 'none', backgroundColor: '#4699C2' }}>
          <GitHubIcon/>
        
        </IconButton>
        <IconButton  href="https://www.linkedin.com/in/natalieharrison45"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
          <LinkedInIcon/>
        </IconButton>

        <Button href="https://ksuid.net"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
          <Typography sx = {{color: '#F9F5EB'}}>
            KSuid
          </Typography>
        </Button>

        <Button  href="https://www.headstogetherhealth.com"  sx = {{textTransform: 'none', backgroundColor: '#4699C2'  }}>
          <Typography sx = {{color: '#F9F5EB'}}>
            Heads Together Health
          </Typography>
        </Button>
      </Stack>
    </Box>
  )
}
export default Footer; 