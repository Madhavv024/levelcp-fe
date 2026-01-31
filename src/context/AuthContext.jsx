import React, { createContext, useContext, useState } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  // Store access token in memory
  const [accessToken, setAccessToken] = useState(null);

  // Function to update access token
  const updateAccessToken = (token) => setAccessToken(token);

  return (
    <AuthContext.Provider value={{ accessToken, updateAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};
