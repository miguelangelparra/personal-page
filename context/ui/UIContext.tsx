import { createContext } from 'react';

interface ContextProps {
     sideMenuOpen:boolean;
     openSideMenu:() => any;
     closeSideMenu:() => any;
}

export const UIContext = createContext({} as ContextProps);