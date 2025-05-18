import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
