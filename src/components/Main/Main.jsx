import { useContext, useEffect, useState } from "react";
import Column from "./Column/Column";
import { Container, MainBlock, MainContent, SMain } from "./Main.styled";
import Loading from "./Loading";
import { Outlet } from "react-router-dom";
import { fetchGetTasks } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { TasksContext } from "../../context/TasksContext";

function Main() {
  const { user } = useContext(AuthContext);
  const { tasks, setTasks } = useContext(TasksContext);
  const [isLoading, setIsLoading] = useState(false);
  let statusList = [];

  async function getTasks() {
    try {
      setIsLoading(true);
      const data = await fetchGetTasks(user.token);

      if (data) {
        setTasks(data);
      }
    } catch (error) {
      throw error.message;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  for (const task of tasks) {
    if (!statusList.includes(task.status)) {
      statusList.push(task.status);
    }
  }

  const components = statusList.map((status, index) => (
    <Column key={index} status={status} />
  ));

  return (
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>{isLoading ? <Loading /> : components}</MainContent>
        </MainBlock>
      </Container>
      <Outlet />
    </SMain>
  );
}

export default Main;
