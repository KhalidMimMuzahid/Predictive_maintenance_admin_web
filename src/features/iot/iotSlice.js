import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const iotApi = createApi({
  reducerPath: "iotApi",
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
  tagTypes: ["add-sensor-module"],
  endpoints: (builder) => ({
    getAllIot: builder.query({
      query: () => "/get-in-stock-sensor-module",
      providesTags: [],
    }),
    postIOT: builder.mutation({
      query: (formData) => ({
        url: "/sensor-module/add-sensor-module",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["add-sensor-module"],
    }),
  }),
});

export const { useGetAllIotQuery, usePostIOTMutation } = iotApi;
