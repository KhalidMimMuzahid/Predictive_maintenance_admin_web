const userType = "";

const setChatUserType = (state = userType, action) => {
    switch (action.type) {
        case "SET_CHAT_USER_TYPE": {
            return action.payload;
        }
        default: return state;
    }
}

export default setChatUserType;