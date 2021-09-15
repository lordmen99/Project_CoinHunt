export const getCurrentUser = () => {
    let user = null;
    try {
        user =
            localStorage.getItem('coin_hunt_user') != null ?
            JSON.parse(localStorage.getItem('coin_hunt_user')) :
            null;
    } catch (error) {
        console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
        user = null;
    }
    return user;
};

export const setCurrentUser = (user) => {
    try {
        if (user) {
            localStorage.setItem('coin_hunt_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('coin_hunt_user');
        }
    } catch (error) {
        console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
    }
};