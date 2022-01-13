import React, { createContext, useState } from 'react';
import { useSocket } from '../hooks/useSocket';
export const AppContext = createContext();
export const AppProvider = ({children}) => {
    const [hideMenu, sethideMenu] = useState(false);
    const {socket,online}=useSocket('http://localhost:8080');
    return (
        
        <AppContext.Provider value={{ hideMenu, sethideMenu,socket,online }}>
            {children}
        </AppContext.Provider>
    )
}
