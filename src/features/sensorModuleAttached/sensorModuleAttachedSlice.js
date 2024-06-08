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
    getSensorModuleByMachine: builder.query({
      query: (machine) =>
        `/sensor-module-attached/get-all-sensors-by-machine?machine_id=${machine}`,
      providesTags: [],
    }),
    getSensorDataByMacAddress: builder.query({
      query: ({ macAddress, page, limit }) =>
        `/sensor-module-attached/get-sensor-data?macAddress=${macAddress}&page=${page}&limit=${limit}`,
    }),
  }),
});

export const {
  useGetSensorModuleByMachineQuery,
  useGetSensorDataByMacAddressQuery,
} = sensorModuleAttachedApi;
