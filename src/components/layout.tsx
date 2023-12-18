import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navBar/Navbar";
import Footer from "./footer";
import { Box } from "@mui/material";
import { BACKGROUND_COLOR } from "./colors";

const Layout = () => {
  return(
    <>
    <Box sx = {{backgroundColor: BACKGROUND_COLOR,  mt: '10px'}}>
    
      <Navbar/>
      <Outlet/>
    </Box>
    </>
  )
}
export default Layout; 