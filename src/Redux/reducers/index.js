import { combineReducers } from "redux";
import openSidebar from "./open_sidebar";
import changeAppTab from "./change_app_tab";
import changeCustomerId from "./change_customer_id";

const rootReducer = combineReducers({
    openSidebar,
    changeAppTab,
    changeCustomerId
})

export default rootReducer;