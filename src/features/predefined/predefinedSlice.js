import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const predefinedApi = createApi({
  reducerPath: "predefinedApi",
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
    getProductCategories: builder.query({
      query: () => `/predefined-value/get-product-all-categories`,
      providesTags: [],
    }),
    getControlPanelMachineBrands: builder.query({
      query: () => `/predefined-value/get-all-machine-brands`,
      providesTags: [],
    }),
    postControlPanelMachineBrand: builder.mutation({
      query: (brandName) => ({
        url: `/predefined-value/add-machine-brand-name?brandName=${brandName}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    postControlPanelMachineBrandModel: builder.mutation({
      query: (details) => ({
        url: `/predefined-value/add-machine-model-name?predefinedValue=${details?.predefinedValue}&brand=${details?.brand}&modelName=${details?.modelName}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    getControlPanelIOTSectionNames: builder.query({
      query: () => `/predefined-value/get-iot-section-names`,
      providesTags: [],
    }),
    postControlPanelIOTSectionName: builder.mutation({
      query: (sectionName) => ({
        url: `/predefined-value/add-iot-section-name?sectionName=${sectionName}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    postControlPanelReservationRequestStatus: builder.mutation({
      query: (status) => ({
        url: `/predefined-value/add-reservation-request-status?status=${status}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    postControlPanelReservationRequestRadius: builder.mutation({
      query: (radius) => ({
        url: `/predefined-value/add-reservation-request-nearest-location?nearestLocation=${radius}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    postControlPanelReservationRequestArea: builder.mutation({
      query: (area) => ({
        url: `/predefined-value/add-reservation-request-area?area=${area}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
    postControlPanelReservationRequestIssue: builder.mutation({
      query: (issue) => ({
        url: `/predefined-value/add-reservation-request-issue?issue=${issue}`,
        method: "POST",
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useGetProductCategoriesQuery,
  useGetControlPanelMachineBrandsQuery,
  usePostControlPanelMachineBrandMutation,
  usePostControlPanelMachineBrandModelMutation,
  useGetControlPanelIOTSectionNamesQuery,
  usePostControlPanelIOTSectionNameMutation,
  usePostControlPanelReservationRequestStatusMutation,
  usePostControlPanelReservationRequestRadiusMutation,
  usePostControlPanelReservationRequestAreaMutation,
  usePostControlPanelReservationRequestIssueMutation,
} = predefinedApi;
