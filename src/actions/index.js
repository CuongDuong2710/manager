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