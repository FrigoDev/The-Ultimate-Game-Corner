/*  -------------API CONSTANTS-----------------   */
export const API_URL = import.meta.env.VITE_API_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const USER_API_URL = import.meta.env.VITE_USER_API_URL;

/*  -------------DEBOUNCE TIMER----------------   */
export const debounceTimer = 1000;

/*  ------------REDUCER CONSTANTS--------------   */
export enum LoginActions {
    
    UPDATE_EMAIL = "UPDATE_EMAIL",
    UPDATE_PASSWORD = "UPDATE_PASSWORD",
}

export enum RegisterActions {
    UPDATE_USERNAME = "UPDATE_USERNAME",
    UPDATE_EMAIL = "UPDATE_EMAIL",
    UPDATE_PASSWORD = "UPDATE_PASSWORD",
    UPDATE_CONFIRM_PASSWORD = "UPDATE_CONFIRM_PASSWORD",
}
