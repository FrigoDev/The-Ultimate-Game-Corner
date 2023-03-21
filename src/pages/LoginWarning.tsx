/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const LoginWarning = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Login It's necessary</h2>
        <p className="form-text">Go to <Link to={"/login"}>Login</Link> page</p>
      </div>
    </div>
  );
};
export default LoginWarning;
