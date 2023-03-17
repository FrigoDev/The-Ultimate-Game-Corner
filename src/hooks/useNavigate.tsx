import { useState } from "react";
const useNavigate = () => {
  const [path, setPath] = useState(window.location.pathname);
  window.onpopstate = () => {
    setPath(window.location.pathname);
  };
  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    setPath(path);
  };
  return { path, navigateTo };
};

export default useNavigate;
