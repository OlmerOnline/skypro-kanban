import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [globalTheme, setGlobalTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "light"
  );
  const [isPopUser, setIsPopUser] = useState(false);

  function updateUser(userData) {
    setUser(userData);

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }

  function updateTheme(themeData) {
    setGlobalTheme(themeData);

    if (themeData) {
      localStorage.setItem("theme", JSON.stringify(themeData));
    } else {
      localStorage.removeItem("theme");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        isPopUser,
        setIsPopUser,
        globalTheme,
        updateTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
