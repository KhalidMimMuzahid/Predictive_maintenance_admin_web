import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const reservationApi = createApi({
  reducerPath: "reservationAPI",
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
    getAllReservation: builder.query({
      query: ({ machineType, reservationType }) =>
        `/reservation/all-reservation?machineType=${machineType}&reservationType=${reservationType}`,
      providesTags: [],
    }),

    getShowaUserInfo: builder.query({
      query: (showaUser) =>
        `/user/showa-user/get-showa-user?showaUser=${showaUser}`,
    }),

    postReservationGroup: builder.mutation({
      query: (formData) => ({
        url: "/reservations-group/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["make-reservation-request-group"],
    }),
  }),
});

export const {
  useGetAllReservationQuery,
  useGetShowaUserInfoQuery,
  usePostReservationGroupMutation,
} = reservationApi;
