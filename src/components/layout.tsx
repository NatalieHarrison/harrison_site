import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navBar/Navbar";
import Footer from "./footer";

const Layout = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
export default Layout; 