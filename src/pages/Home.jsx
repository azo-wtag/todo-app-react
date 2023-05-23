import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import Loader from "components/base/loader";

function Home() {
  return (
    <>
      <Loader />
      <ToastContainer />
      <Layout />
      <HomeContainer />
    </>
  );
}

export default Home;
