import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navBar/Navbar";
import Footer from "./footer";
import { Box } from "@mui/material";

const Layout = () => {
  return(
    <>
    <Box sx = {{backgroundColor: '#D4FAFC',  mt: '10px'}}>
      
    
      <Navbar/>
      <Outlet/>
    </Box>
    </>
  )
}
export default Layout; 