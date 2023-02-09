import React from 'react';
import logo from './logo.svg';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Resume from './components/resume';
import Tools from './components/tools';
import Footer from './components/footer';
import Reviews from './components/reviewComp';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing = {2} sx = {{mt: '5px'}}>

        <Grid item xs = {4.5} md = {4.5}> 
          <AboutMe></AboutMe>
        </Grid> 
        <Divider orientation="vertical" flexItem ></Divider>

        <Grid item xs = {7} md = {7} style={{maxHeight: 800, overflow: 'auto'}}> 
          <Resume></Resume>
        </Grid>

      </Grid>
      <Divider  flexItem sx = {{mt: '10px', mb: '25px'}}></Divider>
      <Tools></Tools>
      
      <Divider  flexItem sx = {{mt: '10px', mb: '10px'}} ></Divider>
      <Footer></Footer>
    </div>
  );
}

export default App;
