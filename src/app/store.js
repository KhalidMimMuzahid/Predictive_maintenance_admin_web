import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../features/customers/customersSlice";
import authSlice from "../features/authentication/authSlice";
// It will be store of Redux

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customersApi.middleware),
});
