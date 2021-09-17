import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setCurrentUser } from '../../helpers/utils';
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from '../actions';

import {
    loginUserSuccess,
    loginUserError,
    registerUserError,
    registerUserSuccess
} from './actions';
import { API_URL } from '../../constant';

export function* watchLoginUser() {
    // eslint-disable-next-line no-use-before-define
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}
export function* watchRegisterUser() {
    // eslint-disable-next-line no-use-before-define
    yield takeEvery(REGISTER_USER, registerUser);
}
export function* watchLogoutUser() {
    // eslint-disable-next-line no-use-before-define
    yield takeEvery(LOGOUT_USER, logout);
}


const RegisterAsync = async(email, password, name, displayName, ) =>
    // eslint-disable-next-line no-return-await
    await fetch(`${API_URL}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username: name, displayName })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)

function* registerUser({ payload }) {
    const { name, displayName, email, password } = payload.user;
    try {
        const registerUser = yield call(RegisterAsync, email, password, name, displayName, );
        yield put(registerUserSuccess(registerUser.message));
        console.log(registerUser);
    } catch (error) {
        console.log(error, 'err');
        yield put(registerUserError(error.message));
    }
}
const loginWithEmailPasswordAsync = async(email, password) =>
    // eslint-disable-next-line no-return-await
    await fetch(`${API_URL}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload;
    console.log(email, password);
    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
        if (!loginUser.message) {
            const item = {...loginUser };
            console.log(loginUser, item);

            setCurrentUser(item);
            yield put(loginUserSuccess(item));
            history.push('/');
        } else {
            yield put(loginUserError(loginUser.message));
        }
    } catch (error) {
        yield put(loginUserError(error.message));
    }
}


function logout({ payload }) {
    const { history } = payload;
    setCurrentUser();
    history.push('/')
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);
}