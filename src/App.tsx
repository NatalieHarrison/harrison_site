import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from './components/home'
import Resume from './components/resume';
import { useState } from "react";
import AboutMeCopy from "./components/aboutme copy";
import ToolsCopy from "./components/tools copy";


function App() {
  const [color, changeColor] = useState("#D4FAFC")
  return (
    <div className="App" style = {{ background: color}}>
      <BrowserRouter>
        <Routes>
      
          <Route path= "/" element={<Layout/>}>
            <Route index element ={<Home />} />
            <Route path = "about" element={<AboutMeCopy />}/>
            <Route path = "resume" element={<Resume />}/>
            <Route path = "tools" element={<ToolsCopy/>}/>

          </Route>
          

        </Routes>
      </BrowserRouter>
      
  
    </div>
  );
}

export default App;
