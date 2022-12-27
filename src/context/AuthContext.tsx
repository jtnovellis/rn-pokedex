import React, { useState, createContext } from 'react';
import { userDetails } from '../utils/userDb';

interface ContextInterface {
  auth: null | userDetails;
  login: (user: userDetails) => void;
  logout: () => void;
}

export const AuthContext = createContext<ContextInterface>({
  auth: null,
  login: (user) => {},
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

  const valueContext: ContextInterface = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
