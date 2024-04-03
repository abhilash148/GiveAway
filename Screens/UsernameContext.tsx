import {createContext,useState,useContext} from 'react';

const UsernameContext = createContext();

export const UsernameProvider = ({children})=>{

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    return(
        <UsernameContext.Provider value={{userName,setUserName,password,setPassword}}>
        {children}
        </UsernameContext.Provider>
    );
};

export const useUsername = ()=>useContext(UsernameContext);