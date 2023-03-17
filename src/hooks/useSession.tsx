import { useState, useEffect } from "react";
import { getSession, loginSession } from "../utils/dbSocket";

const useSession = () => {
  const [session, setSession] = useState();
  const [errors, setErrors] = useState([]);
  const restoreSession = async () => {
    return setSession(await getSession());
  };

  useEffect(() => {
    restoreSession();
  }, []);

  const login = async (user, password) => {
    const loggedUser = await loginSession(user, password);
    if (loggedUser) {
      setSession(loggedUser);
      setErrors([]);
    } else {
      setErrors(["Invalid user or password"]);
    }
  };
  const logOut = () => {
    setSession();
    localStorage.clear();
  };

  return { user: session, login, logOut, errors };
};

export default useSession;
