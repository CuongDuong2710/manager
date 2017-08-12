// Action Creator returns an action
export const emailChanged = (text) => {
    return {
        type: 'email_changed',
        payload: text
    };
};