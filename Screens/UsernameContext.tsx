import {createContext,useState,useContext} from 'react';

const UsernameContext = createContext();

export const UsernameProvider = ({children})=>{

    const [userName,setUserName] = useState('');

    return(
        <UsernameContext.Provider value={{userName,setUserName}}>
        {children}
        </UsernameContext.Provider>
    );
};

export const useUsername = ()=>useContext(UsernameContext);