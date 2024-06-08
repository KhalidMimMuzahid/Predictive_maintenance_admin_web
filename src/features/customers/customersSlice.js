import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const accessToken = GetLocalStorageData("user-token");
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => "/user/get-all-showa-customers",
      providesTags: [],
    }),
    getCustomerDetails: builder.query({
      query: (_id) => `/user/get-user?_id=${_id}`,
      // query: (user) => `/user/showa-user/get-showa-user-by-user?user=${user}`,
      providesTags: [],
    }),
    getCustomerDetailsBySelectQuery: builder.query({
      query: ({ _id, rootUserField, extendedUserFields }) =>
        `/user/get-user?_id=${_id}&rootUserFields=${rootUserField}&extendedUserFields=${extendedUserFields}`,
      providesTags: [],
    }),
    getCustomerDetailsMini: builder.query({
      // query: (_id) => `/user/get-user?_id=${_id}`,
      query: (user) => `/user/showa-user/get-showa-user-by-user?user=${user}`,
      providesTags: [],
    }),
    getCustomerWallet: builder.query({
      query: (uid) => `/customer/wallet/get-user-wallet-info/${uid}`,
      providesTags: [],
    }),
    getCustomerSubscriptionData: builder.query({
      query: (uid) => `/customer/subscription/get-current-packages/${uid}`,
      providesTags: [],
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetCustomerDetailsQuery,
  useGetCustomerDetailsBySelectQueryQuery,
  useGetCustomerDetailsMiniQuery,
  useGetCustomerWalletQuery,
  useGetCustomerSubscriptionDataQuery,
} = customersApi;
