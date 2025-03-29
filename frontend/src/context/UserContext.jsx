import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserDataContext = createContext();

const BACKEND_URL = "http://localhost:6000";

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Try to get user data from backend
      axios.get(`${BACKEND_URL}/user/profile`, { withCredentials: true })
        .then(res => {
          if (res.data.user) {
            setUser(res.data.user);
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/user/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
    }
  };

  return (
    <UserDataContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
