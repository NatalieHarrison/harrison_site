import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navBar/Navbar";
import Footer from "./footer";
import { Box } from "@mui/material";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "./colors";

const Layout = () => {
  return(
    <>
    <Box sx = {{backgroundColor: ACCENT_COLOR,  mt: '10px'}}>
    
      <Navbar/>
      <Outlet/>
    </Box>
    </>
  )
}
export default Layout; 