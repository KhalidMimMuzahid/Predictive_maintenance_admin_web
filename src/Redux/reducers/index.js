import { combineReducers } from "redux";
import openSidebar from "./open_sidebar";
import changeAppTab from "./change_app_tab";

const rootReducer = combineReducers({
    openSidebar,
    changeAppTab
})

export default rootReducer;