import { getCurrentUser } from '../../helpers/utils';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from '../actions';

const INIT_STATE = {
    currentUser: getCurrentUser(),
    loading: false,
    error: '',
    success: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading: true, error: null, success: null };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: null,
                success: null
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: action.payload,
                success: null
            };
        case REGISTER_USER:
            return {...state, loading: true, error: null, success: null };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: action.payload
            };
        case REGISTER_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };

        case LOGOUT_USER:
            return {...state, currentUser: null, error: null, success: null };
        default:
            return {...state };
    }
};