import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import { NUM_OF_CONCURRENT_TOAST } from "utils/const/toast";

function Home() {
  return (
    <>
      <ToastContainer limit={NUM_OF_CONCURRENT_TOAST} />
      <Layout />
      <HomeContainer />
    </>
  );
}

export default Home;
