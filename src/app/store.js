import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../features/customers/customersSlice";
import authSlice from "../features/authentication/authSlice";
import { iotApi } from "../features/iot/iotSlice";
import { reservationApi } from "../features/reservation/reservationSlice";
import { resGroupApi } from "../features/resGroup/resGroupSlice";
import { machineApi } from "../features/machine/machineSlice";
import { invoiceApi } from "../features/invoice/invoiceSlice";
import { serviceProviderApi } from "../features/serviceProvider/serviceProviderSlice";
import { extraDataApi } from "../features/extraData/extraDataSlice";
import { teamOfEngineersApi } from "../features/teamOfEngineers/teamOfEngineersSlice";
import { sensorModuleAttachedApi } from "../features/sensorModuleAttached/sensorModuleAttachedSlice";
import { chartSliceApi } from "../features/chat/chatSlice";
import { feedApi } from "../features/feed/feedSlice";
import { marketplaceApi } from "../features/marketplace/marketplaceSlice";
import { predefinedApi } from "../features/predefined/predefinedSlice";
import { addFilesApi } from "../features/addFiles/addFilesSlice";
import { ordersApi } from "../features/orders/ordersSlice";
import { aiApi } from "../features/ai/aiSlice";
import breakpointsSlice from "../features/breakpoints/breakpointsSlice";
// Store of Redux Using Redux-Toolkit

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [iotApi.reducerPath]: iotApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [resGroupApi.reducerPath]: resGroupApi.reducer,
    [machineApi.reducerPath]: machineApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    [serviceProviderApi.reducerPath]: serviceProviderApi.reducer,
    [teamOfEngineersApi.reducerPath]: teamOfEngineersApi.reducer,
    [sensorModuleAttachedApi.reducerPath]: sensorModuleAttachedApi.reducer,
    [chartSliceApi.reducerPath]: chartSliceApi.reducer,
    [extraDataApi.reducerPath]: extraDataApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    [marketplaceApi.reducerPath]: marketplaceApi.reducer,
    [predefinedApi.reducerPath]: predefinedApi.reducer,
    [addFilesApi.reducerPath]: addFilesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [aiApi.reducerPath]: aiApi.reducer,
    auth: authSlice,
    browser: breakpointsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      customersApi.middleware,
      iotApi.middleware,
      reservationApi.middleware,
      resGroupApi.middleware,
      machineApi.middleware,
      invoiceApi.middleware,
      serviceProviderApi.middleware,
      teamOfEngineersApi.middleware,
      sensorModuleAttachedApi.middleware,
      chartSliceApi.middleware,
      extraDataApi.middleware,
      feedApi.middleware,
      marketplaceApi.middleware,
      predefinedApi.middleware,
      addFilesApi.middleware,
      ordersApi.middleware,
      aiApi.middleware,
    ]),
});
