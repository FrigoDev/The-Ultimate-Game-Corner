import { LoginActions } from "../constants/constants";

export const initialState = {
  email: "",
  password: ""
};

export default function reducer (
  state: {
    email: string;
    password: string;
  },
  action: { type: string; payload: string }
) {
  switch (action.type) {
  case LoginActions.UPDATE_EMAIL:
    return {
      ...state,
      email: action.payload
    };
  case LoginActions.UPDATE_PASSWORD:
    return {
      ...state,
      password: action.payload
    };
  default:
    throw new Error();
  }
}
