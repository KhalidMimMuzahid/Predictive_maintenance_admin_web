export const changeAppTab = (tabName) => {
    return {
        type: "CHANGE_APP_TAB",
        payload: tabName,
    }
}

export const openSidebar = (isSidebarOpen) => {
    return {
        type: "OPEN_SIDEBAR",
        payload: isSidebarOpen,
    }
}


export const changeCustomerId = (customerId) => {
    return {
        type: "CHANGE_CUSTOMER_ID",
        payload: customerId,
    }
}

