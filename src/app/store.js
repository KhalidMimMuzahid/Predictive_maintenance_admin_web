import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../features/customers/customersSlice";
import authSlice from "../features/authentication/authSlice";
import { iotApi } from "../features/iot/iotSlice";
import { reservationApi } from "../features/reservation/reservationSlice";
import { resGroupApi } from "../features/resGroup/resGroupSlice";
import { machineApi } from "../features/machine/machineSlice";
import { invoiceApi } from "../features/invoice/invoiceSlice";
// Store of Redux Using Redux-Toolkit

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [iotApi.reducerPath]: iotApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [resGroupApi.reducerPath]: resGroupApi.reducer,
    [machineApi.reducerPath]: machineApi.reducer,

    [invoiceApi.reducerPath]: invoiceApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      customersApi.middleware,
      iotApi.middleware,
      reservationApi.middleware,
      resGroupApi.middleware,
      machineApi.middleware,
      invoiceApi.middleware,
    ]),
});
