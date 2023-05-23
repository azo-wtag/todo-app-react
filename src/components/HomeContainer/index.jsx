import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Common/Button";
import CreateTask from "components/Task/CreateNew";
import TaskCard from "components/Task/ExistingTask/TaskCard";
import FilterButtonGroup from "components/FilterButtonGroup";
import { addTask } from "store/actions/todo";
import { generateTaskObject } from "utils/factory";
import NoTaskFound from "components/not-found/task";
import styles from "components/HomeContainer/index.module.scss";

function HomeContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function handleAddTask(title) {
    dispatch(addTask(generateTaskObject(title)));
    setIsNewTaskRequested(false);
  }

  const isTaskAvailable = tasks.length > 0;

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.actionBarContainer}`}>
        <Button onClick={showNewTaskCard}>Create</Button>
        <FilterButtonGroup />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && <CreateTask onAddTask={handleAddTask} />}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskId={task.id}
            title={task.title}
            createdAt={task.createdAt}
          />
        ))}
      </div>

      {!isTaskAvailable ? (
        <NoTaskFound />
      ) : (
        <div className="flex justify-center">
          <Button className={styles.loadMoreButton}>Load More</Button>
        </div>
      )}
    </div>
  );
}

export default HomeContainer;
