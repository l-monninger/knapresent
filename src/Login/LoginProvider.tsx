import React, {FC, ReactElement} from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { LoginPage } from './LoginPage';

export interface LoginContextI {
    loggedIn : boolean,
    set : (set : (loggedIn : LoginContextI)=>LoginContextI)=>void
}

export const LoginContext = createContext({
    loggedIn : false,
    set : ()=>{}
} as LoginContextI);

export const loginReducer = (
    state : LoginContextI,
    action : (state : LoginContextI)=>LoginContextI
)=>action(state);

export type LoginProviderProps = {}

export const LoginProvider : FC<LoginProviderProps>  = ({children}) =>{

    const [state, set] = useReducer(loginReducer, {
        loggedIn : false,
        set : ()=>{}
    });

    return (

        <LoginContext.Provider
        value={{
            ...state,
            set : set
        }}>
            {state.loggedIn ? children : <LoginPage/>}
        </LoginContext.Provider>

    )

}

export const useLoginContext = () : LoginContextI=>{
    const context = useContext(LoginContext);
    if(!context) throw new Error("useLoginContext must be called within a LoginProvider");
    return context;
}