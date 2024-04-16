import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../features/customers/customersSlice";
// It will be store of Redux

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customersApi.middleware),
});
