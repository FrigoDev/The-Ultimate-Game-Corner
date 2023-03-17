import React, { useState, useEffect } from "react";
import "../assets/styles/form.css";
import ErrorNotify from "./ErrorNotify";
const Login = ({ login, errors, navigateTo, user }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    if (user) {
      navigateTo("/");
    }
  }, [user]);

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    await login(formData.email, formData.password);
  };
  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Login</h2>
        <form className="form-form" noValidate>
          <div className="input-group input-spaces">
            <input
              name="email"
              onChange={updateFormData}
              className="form-input"
              autoComplete="off"
              type="email"
              id="input-email"
              placeholder=" "
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-group input-spaces">
            <input
              onChange={updateFormData}
              name="password"
              className="form-input"
              autoComplete="off"
              type="password"
              id="input-password"
              placeholder=" "
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="btn-container">
            <button className="form-btn" type="button" onClick={handleSubmit}>
              Login
            </button>
          </div>
          {errors.length > 0 && (<ErrorNotify error={errors}/>)
          }
        </form>
      </div>
    </div>
  );
};
export default Login;
