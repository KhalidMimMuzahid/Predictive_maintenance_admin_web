import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";
import { duration } from "@mui/material";

export const addFilesApi = createApi({
  reducerPath: "addFilesApi",
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
  tagTypes: ["addPhoto"],
  endpoints: (builder) => ({
    postPhotoToAWS: builder.mutation({
      query: (formData) => ({
        url: "/extra-data/upload-photo?folder=files",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["addPhoto"],
    }),
    postPdfData: builder.mutation({
      query: (data) => ({
        url: `/machine/machine-report?machine=${data?._id}&limit=${data?.limit}`,
        method: "POST",
        body: { duration: data?.duration },
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { usePostPhotoToAWSMutation, usePostPdfDataMutation } =
  addFilesApi;
