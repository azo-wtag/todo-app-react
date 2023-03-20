import React from "react";
import Button from "../base/button";
import Image from "../base/image";

import Styles from "./index.module.scss";

function TaskCard() {
  return (
    <div className={Styles.card}>
      <h3>Complete initial setup</h3>
      <p className={Styles.date}>created At: 21.02.22</p>

      <div className="flex justify-between">
        <div className="flex items-center">
          <Button className={`${Styles.button} ${Styles.doneBtn}`}>
            <Image src="check.png" alt="check" />
          </Button>

          <Button className={`${Styles.button} ${Styles.editBtn}`}>
            <Image src="edit.png" alt="check" />
          </Button>

          <Button className={`${Styles.button} ${Styles.deleteBtn}`}>
            <Image src="delete.png" alt="check" />
          </Button>
        </div>

        <Button>Completed in 3 days</Button>
      </div>
    </div>
  );
}

export default TaskCard;
