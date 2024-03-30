export const setCurrentUser = (currentUser) => {
  return {
    type: "SET_CURRENT_USER",
    payload: currentUser,
  };
};

export const changeCustomerId = (customerId) => {
  return {
    type: "CHANGE_CUSTOMER_ID",
    payload: customerId,
  };
};

export const setChatUser = (user) => {
  return {
    type: "SET_CHAT_USER",
    payload: user,
  };
};

export const setChatUserType = (userType) => {
  return {
    type: "SET_CHAT_USER_TYPE",
    payload: userType,
  };
};
