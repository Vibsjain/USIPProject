import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.png";

const MainForm = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{marginBottom:"30px"}}>
      <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="DTU"
      />
      <Navbar.Brand style = {{marginLeft:"20px", fontSize:"30px"}}>DTU CMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
};

export default MainForm;