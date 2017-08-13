import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';

// Action Creator returns an action
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// Redux Thunk handle any type of asynchronous action creators
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user});
        });
    }
};