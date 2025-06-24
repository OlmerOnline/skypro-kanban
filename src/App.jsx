import AppRoutes from "./components/AppRoutes/AppRoutes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
