import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage isRegistration={false} />} />
      <Route
        path="/registration"
        element={<RegistrationPage isRegistration={true} />}
      />
    </Routes>
  );
}

export default AppRoutes;
