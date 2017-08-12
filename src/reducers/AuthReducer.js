// Very first on the reducer is called. We have some initial or default state.
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'email_changed':

        default:
            return state;
    }
};