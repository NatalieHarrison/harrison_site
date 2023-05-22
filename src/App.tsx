import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Layout from "./components/layout";
import Home from './components/home'
import Header from './components/header';
import AboutMe from './components/aboutme';
import Resume from './components/resume';
import Tools from './components/tools';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Layout/>}>
            <Route index element ={<Home />} />
            <Route path = "about" element={<AboutMe />}/>
            <Route path = "resume" element={<Resume />}/>
            <Route path = "tools" element={<Tools />}/>

          </Route>

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
