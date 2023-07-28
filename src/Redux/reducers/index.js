import { combineReducers } from "redux";
import setCurrentUser from "./set_current_user";
import changeCustomerId from "./change_customer_id";
import setChatUserType from "./set_chat_user_type";
import setChatUser from "./set_chat_user";

const rootReducer = combineReducers({
    setCurrentUser,
    changeCustomerId,
    setChatUserType,
    setChatUser
})

export default rootReducer;