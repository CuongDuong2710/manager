import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from '../actions/types';

// Very first on the reducer is called. We have some initial or default state.
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null
};

// Immutable state
export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        // We return a new state object, take all the existing properties on our state object and also include action payload which is our user.
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload};

        default:
            return state;
    }
};