import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";

const Root = () => {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
    </>
  );
};

export default Root;
