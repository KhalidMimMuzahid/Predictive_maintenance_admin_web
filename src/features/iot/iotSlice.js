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
    getSensorModuleByMacAddress: builder.query({
      query: (macAddress) =>
        `/sensor-module-attached/get-sensor-module-attached-by-mac-address?macAddress=${macAddress}`,
      providesTags: [],
    }),
    getAllIot: builder.query({
      query: () => "/sensor-module/get-all-sensor-module?status=",
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
    deleteIOT: builder.mutation({
      query: (macAddress) => ({
        url: `/sensor-module/delete-sensor-module?macAddress=${macAddress}`,
        method: "DELETE",
      }),
      invalidatesTags: ["delete-sensor-module"],
    }),
  }),
});

export const {
  useGetAllIotQuery,
  usePostIOTMutation,
  useDeleteIOTMutation,
  useGetSensorModuleByMacAddressQuery,
} = iotApi;
