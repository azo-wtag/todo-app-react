import React from "react";
import Button from "../base/button";
import TaskCard from "../task";

import Styles from "./index.module.scss";

function HomeContainer() {
  return (
    <div className={`container mx-auto ${Styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${Styles.buttonContainer}`}>
        <Button>Create</Button>

        <div>
          <Button>All</Button>
          <Button>Incomplete</Button>
          <Button>Complete</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-34px">
        <TaskCard />
      </div>

      <div className="flex justify-center">
        <Button className={Styles.loadMoreBtn}>Load More</Button>
      </div>
    </div>
  );
}

export default HomeContainer;
