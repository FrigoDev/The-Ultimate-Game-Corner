import React, { useState } from "react";
import "../assets/styles/form.css";
import ErrorNotify from "./ErrorNotify";
import { newUser } from "../utils/dataFetcher";

const Register = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    const allErrors = [];
    if (formData.password !== formData.confirmPassword) {
      allErrors.push("Passwords do not match");
    }
    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      allErrors.push("Invalid email");
    }
    if (formData.password.length < 4) {
      allErrors.push("Password must be at least 4 characters long");
    }
    if (formData.username.length < 3) {
      allErrors.push("Username must be at least 3 characters long");
    }
    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.email === "" ||
      formData.confirmPassword === ""
    ) {
      allErrors.push("All fields are required");
    }
    if (allErrors.length > 0) return setErrors(allErrors);
    await newUser({ name: formData.username, email: formData.email, password: formData.password });
    navigateTo("/");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Register</h2>
        <form className="form-form">
          <div className="input-group input-spaces">
            <input
              name="username"
              className="form-input"
              autoComplete="off"
              type="text"
              id="input-username"
              onChange={updateFormData}
              placeholder=" "
            />
            <label className="form-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="input-group input-spaces">
            <input
              name="email"
              className="form-input"
              autoComplete="off"
              type="email"
              id="input-email"
              onChange={updateFormData}
              placeholder=" "
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-group input-spaces">
            <input
              name="password"
              className="form-input"
              autoComplete="off"
              type="password"
              id="input-password"
              onChange={updateFormData}
              placeholder=" "
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="input-group input-spaces">
            <input
              name="confirmPassword"
              className="form-input"
              autoComplete="off"
              type="password"
              id="input-confirmPassword"
              onChange={updateFormData}
              placeholder=" "
            />
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
          </div>
          <div className="btn-container">
            <button className="form-btn" type="button" onClick={handleSubmit}>
              Register
            </button>
          </div>
          {errors.length > 0 && (<ErrorNotify error={errors}/>) }
        </form>
      </div>
    </div>
  );
};
export default Register;
