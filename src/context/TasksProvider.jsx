import { useState } from "react";
import { TasksContext } from "./TasksContext";

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(null);
  const [dragStatus, setDragStatus] = useState("");

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        calendarSelectedDate,
        setCalendarSelectedDate,
        dragStatus,
        setDragStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
