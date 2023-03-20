import React from "react";

import Button from "../../base/button";
import Image from "../../base/image";
import TextArea from "../../base/text-area";
import Styles from "./index.module.scss";

function CreateTask() {
  return (
    <form>
      <TextArea noOfRows={4} />

      <div className={`flex items-center ${Styles.buttonContainer}`}>
        <Button className={Styles.addTaskBtn}>Add Task</Button>
        <Button>
          <Image src="delete.png" alt="check" />
        </Button>
      </div>
    </form>
  );
}

export default CreateTask;
