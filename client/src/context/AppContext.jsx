import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );
  const [stacks, setStacks] = useState([]);
  const [input, setInput] = useState("");

  // Fetch all stacks
  useEffect(() => {
    const loadStacks = async () => {
      try {
        const { data } = await axios.get("/api/stack/all");

        if (data.success) {
          setStacks(data.stacks);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message || error.message
        );
      }
    };

    loadStacks();
  }, []);

  // Set Authorization header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    stacks,
    setStacks,
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};