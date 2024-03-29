'use client'
import { useEffect,useState,createContext } from "react";
import { account } from "@/app/lib/appwrite.js";
import { ID } from "appwrite";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

    async function login(email,password){  
        const loggedIn = await account.createEmailSession(email,password);
        console.log(loggedIn);
        setUser(loggedIn);
    }

    async function logout(){
        await account.deleteSession("current");
        setUser(null);
    }

    async function register(email,password){
        await account.create(ID.unique(),email,password);
        await login(email,password);
    }

    async function init(){
        try{
            const loggedIn = await account.get();
            console.log(loggedIn);
            setUser(loggedIn);
        }catch(e){
            setUser(null);
        }
    }
    
    useEffect(()=>{
        init();
    },[])

    return(
        <AuthContext.Provider value={{current: user, login, logout, register}}> 
            {children}
        </AuthContext.Provider>
    )

}