import { useEffect, useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [toggle, setToggle] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("theme", toggle);
  }, [toggle]);

  return (
    <Auth.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        registeredUser,
        setRegisteredUser,
        toggle,
        setToggle,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
