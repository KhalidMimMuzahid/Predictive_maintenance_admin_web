import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const extraDataApi = createApi({
  reducerPath: "extraDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    deleteMyAccount: builder.mutation({
      query: (emailOrPhone) => ({
        url: `/extra-data/delete-my-account?emailOrPhone=${emailOrPhone}`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const { useDeleteMyAccountMutation } = extraDataApi;
