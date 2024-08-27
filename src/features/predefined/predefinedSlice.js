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
  }),
});

export const {
  useGetProductCategoriesQuery,
  useGetControlPanelMachineBrandsQuery,
  usePostControlPanelMachineBrandMutation,
  usePostControlPanelMachineBrandModelMutation,
} = predefinedApi;
