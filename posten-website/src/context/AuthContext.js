import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext([null, () => {}]);

const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);

  const authContext = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
