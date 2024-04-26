import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const iotApi = createApi({
  reducerPath: "iotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.showaapp.com",
    prepareHeaders: (headers) => {
      const accessToken = GetLocalStorageData("user-token");
      console.log(accessToken);
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllIot: builder.query({
      query: () => "/admin/iot/get-all-iot-sensor",
      providesTags: [],
    }),
  }),
});

export const { useGetAllIotQuery } = iotApi;
