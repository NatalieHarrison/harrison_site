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


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing = {2} sx = {{mt: '5px'}}>

        <Grid item xs = {3} md = {3}> 
        <AboutMe></AboutMe>
        </Grid> 
        <Divider orientation="vertical" flexItem ></Divider>

        <Grid item xs = {5} md = {5}> 
        <Resume></Resume>
        </Grid> 
        <Divider orientation="vertical" flexItem ></Divider>

        <Grid item xs = {3} md = {3}> 
        <Tools></Tools>
        </Grid> 
      </Grid>
      <Divider  flexItem ></Divider>
      <Footer></Footer>
    </div>
  );
}

export default App;
