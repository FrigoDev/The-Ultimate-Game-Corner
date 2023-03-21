import { RegisterActions } from "../constants/constants";

export const initialState = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};
export default function reducer(
	state: typeof initialState,
	action: { type: string; payload: string }
) {
	switch (action.type) {
		case RegisterActions.UPDATE_USERNAME:
			return {
				...state,
				username: action.payload,
			};
		case RegisterActions.UPDATE_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case RegisterActions.UPDATE_PASSWORD:
			return {
				...state,
				password: action.payload,
			};
		case RegisterActions.UPDATE_CONFIRM_PASSWORD:
			return {
				...state,
				confirmPassword: action.payload,
			};
		default:
			throw new Error();
	}
}
