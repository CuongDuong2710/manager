import { EMAIL_CHANGED } from './types';

// Action Creator returns an action
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};