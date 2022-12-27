import React, { useState, createContext } from 'react';
import { userDetails } from '../utils/userDb';

export const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<userDetails | null>(null);

  const login = (userData: userDetails) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(null);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
