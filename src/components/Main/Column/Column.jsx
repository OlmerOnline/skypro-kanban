import { useContext } from "react";
import CardsItem from "../CardsItem/CardsItem";
import {
  Cards,
  ColumnTitle,
  ColumnTitleParagraph,
  MainColumn,
} from "./Column.styled";
import { TasksContext } from "../../../context/TasksContext";

function Column({ status }) {
  const { tasks } = useContext(TasksContext);
  const listTask = tasks.filter((task) => task.status === status);
  const components = listTask.map((task) => (
    <CardsItem key={task._id} task={task} />
  ));

  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleParagraph>{status}</ColumnTitleParagraph>
      </ColumnTitle>
      <Cards>{components}</Cards>
    </MainColumn>
  );
}

export default Column;
