import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../features/customers/customersSlice";
import authSlice from "../features/authentication/authSlice";
import { iotApi } from "../features/iot/iotSlice";
import { reservationApi } from "../features/reservation/reservationSlice";
import { resGroupApi } from "../features/resGroup/resGroupSlice";
// Store of Redux Using Redux-Toolkit

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [iotApi.reducerPath]: iotApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [resGroupApi.reducerPath]: resGroupApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      customersApi.middleware,
      iotApi.middleware,
      reservationApi.middleware,
      resGroupApi.middleware,
    ]),
});
