import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

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
  }),
});

export const { usePostPhotoToAWSMutation } = addFilesApi;
