import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import supabase from "config";
import { useDispatch, useSelector } from "react-redux";
import { loadTaskFromDB } from "store/actions/todo";
import { showErrorToast } from "utils/toast";
import Loader from "components/base/loader";
import { setisLoading } from "store/actions/filter";

function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.filter.isLoading);

  useEffect(() => {
    async function fetchTasks() {
      dispatch(setisLoading(true));
      try {
        const { data } = await supabase.from("tasks").select();
        dispatch(loadTaskFromDB(data));
      } catch (error) {
        showErrorToast(error.message);
      }
      dispatch(setisLoading(false));
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
