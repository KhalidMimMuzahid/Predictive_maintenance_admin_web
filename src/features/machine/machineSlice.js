import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const machineApi = createApi({
  reducerPath: "machineApi",
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
    getMachineData: builder.query({
      query: (_id) => `/machine/getAllMachineBy_id?user_id=${_id}`,
      providesTags: [],
    }),
    getMachineDataById: builder.query({
      query: (machine) => `/machine/getMachineBy_id?machine=${machine}`,
    }),
  }),
});

export const { useGetMachineDataQuery, useGetMachineDataByIdQuery } =
  machineApi;
