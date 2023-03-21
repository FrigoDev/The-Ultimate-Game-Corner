import { useState, FormEvent, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import ErrorNotify from "../components/ErrorNotify";
import { newUser } from "../utils/dataFetcher";
import regisReducer, { initialState } from "../store/registerReducer";
import "../assets/styles/form.css";

const Register = () => {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(regisReducer, initialState);

	const updateUsername = (e: FormEvent<HTMLInputElement>) => {
		dispatch({
			type: "UPDATE_USERNAME",
			payload: e.currentTarget.value.trim(),
		});
	};
	const updateEmail = (e: FormEvent<HTMLInputElement>) => {
		dispatch({ type: "UPDATE_EMAIL", payload: e.currentTarget.value.trim() });
	};
	const updatePassword = (e: FormEvent<HTMLInputElement>) => {
		dispatch({
			type: "UPDATE_PASSWORD",
			payload: e.currentTarget.value.trim(),
		});
	};
	const updateConfirmPassword = (e: FormEvent<HTMLInputElement>) => {
		dispatch({
			type: "UPDATE_CONFIRM_PASSWORD",
			payload: e.currentTarget.value.trim(),
		});
	};

	const [errors, setErrors] = useState<Array<string>>([]);
	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		const allErrors = [];
		if (state.password !== state.confirmPassword) {
			allErrors.push("Passwords do not match");
		}
		if (!state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			allErrors.push("Invalid email");
		}
		if (state.password.length < 4) {
			allErrors.push("Password must be at least 4 characters long");
		}
		if (state.username.length < 3) {
			allErrors.push("Username must be at least 3 characters long");
		}
		if (
			state.username === "" ||
			state.password === "" ||
			state.email === "" ||
			state.confirmPassword === ""
		) {
			allErrors.push("All fields are required");
		}
		if (allErrors.length > 0) return setErrors(allErrors);
		await newUser({
			user: state.username,
			email: state.email,
			password: state.password,
		});
		navigate("/");
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
							onChange={updateUsername}
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
							onChange={updateEmail}
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
							onChange={updatePassword}
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
							onChange={updateConfirmPassword}
							placeholder=" "
						/>
						<label className="form-label" htmlFor="confirmPassword">
							Confirm Password
						</label>
					</div>
					<div className="btn-container">
						<button className="form-btn" type="button" onClick={ async(e) => {handleSubmit}}>
							Register
						</button>
					</div>
					{errors.length > 0 && <ErrorNotify error={errors} />}
				</form>
			</div>
		</div>
	);
};
export default Register;
