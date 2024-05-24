import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const serviceProviderApi = createApi({
  reducerPath: "serviceProviderApi",
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
    getServiceProviders: builder.query({
      query: () =>
        "/service-provider-company/get-all-service-provider-companies",
      providesTags: [],
    }),
    getServiceProviderInfoById: builder.query({
      query: (_id) =>
        `/service-provider-company/service-provider-company-by_id?serviceProviderCompany=${_id}`,
    }),
    getServiceProviderAllMembersById: builder.query({
      query: (_id) =>
        `/service-provider-company//get-all-members-for-service-provider-company?serviceProviderCompany=${_id}`,
    }),
  }),
});

export const {
  useGetServiceProvidersQuery,
  useGetServiceProviderInfoByIdQuery,
  useGetServiceProviderAllMembersByIdQuery,
} = serviceProviderApi;
