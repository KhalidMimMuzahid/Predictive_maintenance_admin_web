import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const aiApi = createApi({
  reducerPath: "aiApi",
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
  tagTypes: ["edit_threshold"],
  endpoints: (builder) => ({
    getThreshold: builder.query({
      query: () => `/ai/get-thresholds`,
      providesTags: [],
    }),
    editThreshold: builder.mutation({
      query: (thresholdDetails) => ({
        url: "/ai/add-threshold",
        method: "POST",
        body: thresholdDetails,
      }),
      invalidatesTags: ["edit_threshold"],
    }),
  }),
});

export const { useGetThresholdQuery, useEditThresholdMutation } = aiApi;
