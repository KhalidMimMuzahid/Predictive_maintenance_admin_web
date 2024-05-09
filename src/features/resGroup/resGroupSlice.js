import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const resGroupApi = createApi({
  reducerPath: "resGroupApi",
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
    getAllResGroups: builder.query({
      query: () => "/reservations-group/all-reservations-group",
      providesTags: [],
    }),
  }),
});

export const { useGetAllResGroupsQuery } = resGroupApi;
