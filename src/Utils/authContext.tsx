// AuthContext.tsx
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeStorageData, setStorageData} from './storageProiver';

type AuthContextType = {
  isLoggedIn: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('UserToken');
      setIsLoggedIn(userToken ? userToken.toString() : '');
    };

    checkLoginStatus();
  }, []);

  const login = async (token: string) => {
    await setStorageData('UserToken', token);
    setIsLoggedIn(token.toString());
  };

  const logout = async () => {
    await removeStorageData();
    setIsLoggedIn('');
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
