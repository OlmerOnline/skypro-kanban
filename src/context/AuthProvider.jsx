import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  function updateUser(userData) {
    setUser(userData);

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.clear();
    }
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
