import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import Header from './header';
import AboutMe from './aboutme';
import Resume from './resume';
import Tools from './tools';
import Footer from './footer';

function Home(){
  return(
    <div>
      <Grid container spacing = {2} sx = {{mt: '5px'}}>

        <Grid item xs = {10} md = {4} style={{maxHeight: 700, overflow: 'auto'}} > 
          <AboutMe></AboutMe>
        </Grid> 
        <Divider orientation="vertical" flexItem ></Divider>

        <Grid item xs = {10} md = {7} style={{maxHeight: 700, overflow: 'auto'}} sx = {{ml: '5px'}}> 
          <Resume></Resume>
        </Grid>

      </Grid>
      <Divider  flexItem sx = {{mt: '10px', mb: '25px'}}></Divider>
      <Tools></Tools>
      
      <Divider  flexItem sx = {{mt: '10px'}} ></Divider>
    </div>
  )

}
export default Home; 