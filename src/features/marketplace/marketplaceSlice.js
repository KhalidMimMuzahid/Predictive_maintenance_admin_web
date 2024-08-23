import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const marketplaceApi = createApi({
  reducerPath: "marketplaceAPI",
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
  tagTypes: ["add_product"],
  endpoints: (builder) => ({
    getMarketplaceProductList: builder.query({
      query: () => `/marketplace/product/get-all-products`,
      providesTags: [],
    }),
    getMarketplaceProductDetailsById: builder.query({
      query: (_id) =>
        `/marketplace/product/get-product-by-product_id?productId=${_id}`,
      providesTags: [],
    }),
    postProduct: builder.mutation({
      query: (product) => ({
        url: "/marketplace/product/create",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["add_product"],
    }),
  }),
});

export const {
  useGetMarketplaceProductListQuery,
  useGetMarketplaceProductDetailsByIdQuery,
  usePostProductMutation,
} = marketplaceApi;
