import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to= "/">Home</Link>
        </li>

        <li>
          <Link to= "/about">About</Link>
        </li>

        <li>
          <Link to= "/resume">Resume</Link>
        </li>

        <li>
          <Link to= "/tools">Tools</Link>
        </li>
      </ul>
    </nav>
   
    </>
  );
};
  
export default Navbar;