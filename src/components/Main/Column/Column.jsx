import { useContext, useEffect, useState } from "react";
import CardsItem from "../CardsItem/CardsItem";
import {
  Cards,
  ColumnTitle,
  ColumnTitleParagraph,
  MainColumn,
} from "./Column.styled";
import { TasksContext } from "../../../context/TasksContext";
import { useDrop } from "react-dnd";
import { AuthContext } from "../../../context/AuthContext";
import { fetchEditTask } from "../../../services/api";
import CardsItemEmpty from "../CardsItem/CardsItemEmpty";
// import axios from "axios";

function Column({ status }) {
  const { tasks, setTasks, dragStatus } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const [isDrag, setIsDrag] = useState(dragStatus);
  useEffect(() => {
    setIsDrag(dragStatus);
  }, [dragStatus]);

  const listTask = tasks.filter((task) => task.status === status);
  const components = listTask.map((task) => (
    <CardsItem key={task._id} task={task} />
  ));

  async function dropTask(task) {
    try {
      const data = await fetchEditTask(user.token, task);

      if (data) {
        setTasks(data);
      }
    } catch (error) {
      throw Error(error.message);
    }
  }

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item) => {
      if (item.task.status !== status) {
        item.task.status = status;
        dropTask(item.task);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <MainColumn ref={dropRef} $isOver={isOver}>
      <ColumnTitle>
        <ColumnTitleParagraph>{status}</ColumnTitleParagraph>
      </ColumnTitle>
      <Cards>
        {components}
        {isDrag && isDrag !== status && <CardsItemEmpty />}
      </Cards>
    </MainColumn>
  );
}

export default Column;
