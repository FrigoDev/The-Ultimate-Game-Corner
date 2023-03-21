import { useReducer, useEffect, FormEvent, ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import ErrorNotify from "../components/ErrorNotify";
import loginReducer from "../store/loginReducer";
import { initialState } from "../store/loginReducer";
import { User } from "../types/user";
import "../assets/styles/form.css";

const Login = ({ login, errors, user }: {login: (user: string, password: string) => void, errors: Array<string>, user: User }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(loginReducer , initialState); 
  useEffect(() => {
    if (user.name !== "") {
      navigate("/");
    }
  }, [user]);

  const updateEmail = (e:FormEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_EMAIL", payload: e.currentTarget.value.trim() });
  };

  const updatePassword = (e:FormEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_PASSWORD", payload: e.currentTarget.value.trim() });
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(state.email, state.password);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Login</h2>
        <form className="form-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group input-spaces">
            <input
              name="email"
              onChange={updateEmail}
              className="form-input"
              autoComplete="off"
              type="email"
              id="input-email"
              placeholder=" "
              value={state.email}
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-group input-spaces">
            <input
              onChange={updatePassword}
              name="password"
              className="form-input"
              autoComplete="off"
              type="password"
              id="input-password"
              placeholder=" "
              value={state.password}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="btn-container">
            <button className="form-btn" type="submit">
              Login
            </button>
          </div>
          {errors.length > 0 && <ErrorNotify error={errors} />}
        </form>
      </div>
    </div>
  );
};

export default Login;
