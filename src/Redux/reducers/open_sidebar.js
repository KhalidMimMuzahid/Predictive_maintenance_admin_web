const isSidebarOpen = true;

const openSidebar = (state = isSidebarOpen, action) => {
    switch (action.type) {
        case "OPEN_SIDEBAR": {
            return action.payload;
        }
        default: return state;
    }
}

export default openSidebar;