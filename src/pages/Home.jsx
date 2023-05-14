import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "components/home-container";
import Layout from "components/layout";
import Loader from "components/base/loader";
import supabase from "config";
import { loadTaskFromDB } from "store/actions/todo";
import { setisLoading } from "store/actions/filter";
import { showErrorToast } from "utils/toast";

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
      <Loader isLoading={isLoading} />
      <ToastContainer />
      <Layout />
      <HomeContainer />
    </>
  );
}

export default Home;
