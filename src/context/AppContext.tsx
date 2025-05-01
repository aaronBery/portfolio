import React, { createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  name: string;
  role: string;
  email: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value: AppContextType = {
    name: "Aaron Bery",
    role: "Lead Software Engineer",
    email: "aaronaldo99@gmail.com",
    location: "Brighton, United Kingdom",
    socialLinks: {
      github: "https://github.com/aaronBery",
      linkedin: "https://www.linkedin.com/in/aaronwebdeveloper/"
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};