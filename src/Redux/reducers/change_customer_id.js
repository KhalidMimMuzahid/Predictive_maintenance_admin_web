const initialId = "";

const changeCustomerId = (state = initialId, action) => {
    switch (action.type) {
        case "CHANGE_CUSTOMER_ID": {
            return action.payload;
        }
        default: return state;
    }
}

export default changeCustomerId;