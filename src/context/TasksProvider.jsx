import { useState } from "react";
import { TasksContext } from "./TasksContext";

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(null);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        calendarSelectedDate,
        setCalendarSelectedDate,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
