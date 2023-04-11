import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import supabase from "config";
import { useDispatch } from "react-redux";
import { loadTaskFromDB } from "store/actions/todo";
import { showErrorToast } from "utils/toast";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await supabase.from("tasks").select();
        dispatch(loadTaskFromDB(data));
      } catch (error) {
        showErrorToast(error.message);
      }
    }

    fetchTasks();
  }, []);

  return (
    <>
      <ToastContainer />
      <Layout />
      <HomeContainer />
    </>
  );
}

export default Home;
