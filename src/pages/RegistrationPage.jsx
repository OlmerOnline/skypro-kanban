import Auth from "../components/Auth/Auth";

function RegistrationPage({ isRegistration, setIsAuth }) {
  return <Auth isRegistration={isRegistration} setIsAuth={setIsAuth} />;
}

export default RegistrationPage;
