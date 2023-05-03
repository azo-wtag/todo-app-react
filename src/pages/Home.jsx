import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import supabase from "config";
import { useDispatch } from "react-redux";
import { loadTaskFromDB } from "store/actions/todo";
import { showErrorToast } from "utils/toast";
import Loader from "components/base/loader";

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      setIsLoading(true);
      try {
        const { data } = await supabase.from("tasks").select();
        dispatch(loadTaskFromDB(data));
      } catch (error) {
        showErrorToast(error.message);
      }
      setIsLoading(false);
    }

    fetchTasks();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <Layout />
      <HomeContainer />
    </>
  );
}

export default Home;
