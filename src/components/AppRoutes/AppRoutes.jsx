import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import UserPage from "../../pages/UserPage";
import ExitPage from "../../pages/ExitPage";
import NewTaskPage from "../../pages/NewTaskPage";
import TaskPage from "../../pages/TaskPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/user" element={<UserPage isShow={true} />} />
          <Route path="/exit" element={<ExitPage isShow={true} />} />
          <Route path="/new-task" element={<NewTaskPage isShow={true} />} />
          <Route path="/task/:id" element={<TaskPage isShow={true} />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage isRegistration={false} />} />
      <Route
        path="/registration"
        element={<RegistrationPage isRegistration={true} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
