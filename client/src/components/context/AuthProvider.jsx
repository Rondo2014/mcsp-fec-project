import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if ((token, username)) {
      setAuth({ token, username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({});
    navigate("/");
  };

  const handleLogin = async (username, password) => {
    const response = await api.post(
      "/api/login",
      JSON.stringify({ username, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token = response?.data?.token;

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);

    setAuth({ token });
    return true;
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
