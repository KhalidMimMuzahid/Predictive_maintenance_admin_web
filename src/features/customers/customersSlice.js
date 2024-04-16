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
  }),
});

export const { useGetCustomersQuery } = customersApi;
