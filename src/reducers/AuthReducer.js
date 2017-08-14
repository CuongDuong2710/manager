import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

// Very first on the reducer is called. We have some initial or default state.
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: ''
};

// Immutable state -> is pulling by mapStateToProps
export default (state = INITIAL_STATE, action) => {
//    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        // We return a new state object, take all the existing properties on our state object and also include action payload which is our user.
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload};

        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: ''};

        default:
            return state;
    }
};