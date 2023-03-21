import { User } from "../types/user";
import { Outlet,Link } from "react-router-dom";
import LoginWarning from "../pages/LoginWarning";
export default function PrivategameDesc({ user }: { user: User }) {
   return(
    <>{
        user.email !==""?
        <Outlet/>:
        <>
        <LoginWarning/>
        </>
    }</>
   )}