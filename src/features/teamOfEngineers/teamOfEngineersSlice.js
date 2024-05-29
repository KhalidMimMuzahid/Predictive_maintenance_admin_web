import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const teamOfEngineersApi = createApi({
  reducerPath: "teamOfEngineersApi",
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
    getTeamOfEngineers: builder.query({
      query: (_id) => `team-of-engineers/get-teams-of-engineers`,
      providesTags: [],
    }),
  }),
});

export const { useGetTeamOfEngineersQuery } = teamOfEngineersApi;
