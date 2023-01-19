import React from 'react';
import logo from './logo.svg';
import Grid from '@mui/material/Grid';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing = {2}>

        <Grid item xs = {4} md = {4}> 
        <AboutMe></AboutMe>
        </Grid> 

        <Grid item xs = {4} md = {4}> 
        <Resume></Resume>
        </Grid> 

        <Grid item xs = {4} md = {4}> 
        </Grid> 

      </Grid>
    </div>
  );
}

export default App;
