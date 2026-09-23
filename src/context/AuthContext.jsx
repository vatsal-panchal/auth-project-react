import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) || []);
  return (
    <Auth.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        registeredUser,
        setRegisteredUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
