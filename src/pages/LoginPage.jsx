import Auth from "../components/Auth/Auth";

function LoginPage({ isRegistration, setIsAuth }) {
  return <Auth isRegistration={isRegistration} setIsAuth={setIsAuth} />;
}

export default LoginPage;
