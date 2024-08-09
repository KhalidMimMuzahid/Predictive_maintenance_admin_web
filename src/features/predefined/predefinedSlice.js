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
  }),
});

export const { useGetProductCategoriesQuery } = predefinedApi;
