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
    localStorage.removeItem("username");
    localStorage.removeItem("profile_picture");
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
    console.log(response.data);
    const token = response?.data?.token;
    const profilePic = response?.data?.results.profile_pic;

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("profile_picture", profilePic);

    setAuth({ token });
    return true;
  };

  const handleRegister = async (username, password, email) => {
    const response = await api.post(
      "/api/register",
      JSON.stringify({ username, password, email }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    const token = response?.data?.token;
    const profilePic = response?.data?.results.profile_pic;

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("profile_picture", profilePic);

    setAuth({ token });

    return true;
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, handleLogout, handleLogin, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
