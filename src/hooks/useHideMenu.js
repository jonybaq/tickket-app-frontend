import  { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';

export const useHideMenu = (ocultar) => {
    const {sethideMenu} = useContext(AppContext);
    useEffect(() => {
        sethideMenu(ocultar);
    }, [ocultar,sethideMenu]);
}
