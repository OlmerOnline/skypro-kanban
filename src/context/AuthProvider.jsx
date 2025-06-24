import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [isShowPopUser, setIsShowPopUser] = useState(false);

  function updateUser(userData) {
    setUser(userData);

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.clear();
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, updateUser, isShowPopUser, setIsShowPopUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
