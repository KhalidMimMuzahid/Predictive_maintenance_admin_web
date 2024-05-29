import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const sensorModuleAttachedApi = createApi({
  reducerPath: "sensorModuleAttachedApi",
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
    getSensorModuleByMacAddress: builder.query({
      query: (getSensorsByMachine) =>
        `/sensor-module-attached/get-sensors-by-machine?machine_id=${getSensorsByMachine}`,
      providesTags: [],
    }),
  }),
});

export const { useGetSensorModuleByMacAddressQuery } = sensorModuleAttachedApi;
