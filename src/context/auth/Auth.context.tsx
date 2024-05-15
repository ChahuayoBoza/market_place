import React, { createContext, useContext, useState, ReactNode, FunctionComponent, Dispatch, SetStateAction } from 'react';
import { User } from '../../api/auth/user.interface';



interface AuthState {
  authToken: string | null;
  setAuthToken: Dispatch<SetStateAction<string | null>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('authToken'));
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  const login = (userData: User) => {
    setAuthToken(userData.token);
    setUser(userData);
    localStorage.setItem('authToken', userData.token);
    localStorage.setItem('user', JSON.stringify(userData));
    console.log("Vengo del metodo login que devuelve el user", userData)
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  // Resto de tu implementación...

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, user, setUser, login ,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
