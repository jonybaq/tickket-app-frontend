import React from 'react'
import { AppProvider } from '../context/AppContext';
import { RouterPage } from '../pages/RouterPage';



export const TicketApp = () => {
    
    return (
        <AppProvider>
             <RouterPage/>
        </AppProvider>
    )
}
