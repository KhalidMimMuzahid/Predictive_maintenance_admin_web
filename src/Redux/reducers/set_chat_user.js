const user = null;

const setChatUser = (state = user, action) => {
    switch (action.type) {
        case "SET_CHAT_USER": {
            return action.payload;
        }
        default: return state;
    }
}

export default setChatUser;