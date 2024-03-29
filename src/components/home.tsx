import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


import AboutMe from './aboutme';
import Resume from './resume';
import Tools from './tools';
import Footer from './footer';

function Home(){
  return(
    <div>
      <AboutMe></AboutMe>

      <Divider orientation="horizontal" flexItem ></Divider>

      <Resume></Resume>

      <Divider  flexItem ></Divider>
      
      <Tools></Tools>
      
      <Divider  flexItem sx = {{mt: '10px'}} ></Divider>
    </div>
  )

}
export default Home; 