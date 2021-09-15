// eslint-disable-next-line import/no-cycle
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from '../actions';

export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history },
});
export const loginUserSuccess = (success) => ({
    type: LOGIN_USER_SUCCESS,
    payload: success,
});
export const loginUserError = (message) => ({
    type: LOGIN_USER_ERROR,
    payload: message,
});

export const registerUser = (user) => ({
    type: REGISTER_USER,
    payload: { user },
});
export const registerUserSuccess = (success) => ({
    type: REGISTER_USER_SUCCESS,
    payload: success,
});
export const registerUserError = (message) => ({
    type: REGISTER_USER_ERROR,
    payload: message,
});

export const logoutUser = (history) => ({
    type: LOGOUT_USER,
    payload: { history },
});