import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => "/admin/customer/get-all-customer",
      providesTags: [],
    }),
    getCustomerDetails: builder.query({
      query: (uid) => `/customer/profile/user/find-user-with-id/${uid}`,
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
  useGetCustomersQuery,
  useGetCustomerDetailsQuery,
  useGetCustomerWalletQuery,
  useGetCustomerSubscriptionDataQuery,
} = customersApi;
