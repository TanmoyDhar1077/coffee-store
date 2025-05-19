import React from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  useTitle("Home");
  return <div>Home</div>;
};

export default Home;
