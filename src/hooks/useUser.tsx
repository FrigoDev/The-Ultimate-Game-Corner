import { useState, useEffect } from "react";
import { User } from "../types/user";
import { loginSession } from "../utils/dbSocket";
import useLocalStorage from "./useLocalStorage";
const useSession = () => {
   const [user, setUser,clear] =  useLocalStorage<User>("session",{name:"",email:""});
   const [errors,setErrors] = useState<Array<string>>([])
   const login = async (user:string, password:string)=>{
     const loggedUser = await loginSession(user, password);
     if (loggedUser) {
      setUser(loggedUser);
      setErrors([]);
    } else {
      setErrors(["Invalid user or password"]);
    }
   }

   const logOut = () => {
    clear();
  };
  return { user, login, logOut, errors };
}
export default useSession;
