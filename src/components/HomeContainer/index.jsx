import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Common/Button";
import CreateTask from "components/Task/CreateNew";
import TaskCard from "components/Task/ExistingTask/TaskCard";
import FilterButtonGroup from "components/FilterButtonGroup";
import { addTaskToTodo } from "store/actions/todo";
import { generateTaskObject } from "utils/factory";
import styles from "components/HomeContainer/index.module.scss";

function HomeContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function handleAddTask(title) {
    dispatch(addTaskToTodo(generateTaskObject(title)));
    setIsNewTaskRequested(false);
  }

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
            title={task.title}
            createdAt={task.createdAt}
            isCompleted={task.isCompleted}
            completedAt={task.completedAt}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className={styles.loadMoreBtn}>Load More</Button>
      </div>
    </div>
  );
}

export default HomeContainer;
