const user = null;

const setCurrentUser = (state = user, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": {
            return action.payload;
        }
        default: return state;
    }
}

export default setCurrentUser;