import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const resGroupApi = createApi({
  reducerPath: "resGroupApi",
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
    postReservationGroup: builder.mutation({
      query: (formData) => ({
        url: "/reservations-group/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["make-reservation-request-group"],
    }),
    getAllResGroups: builder.query({
      query: ({ groupForMachineType, reservationGroupType }) =>
        `/reservations-group/all-reservations-group?groupForMachineType=${groupForMachineType}&reservationGroupType=${reservationGroupType}`,
      providesTags: [],
    }),
    postBidsAssign: builder.mutation({
      query: ({ reservationRequestGroup, _id }) => ({
        url: `/reservations-group/select-bidding-winner?reservationRequestGroup=${reservationRequestGroup}&bid=${_id}`,
        method: "PATCH",
      }),
      providesTags: ["Test"],
    }),
    getReservationGroupByID: builder.query({
      query: (_id) =>
        `/reservations-group/get-reservation-group-by-id?reservationRequestGroup=${_id}`,
    }),
    patchSetBidingDate: builder.mutation({
      query: ({ reservationRequestGroup, biddingDate }) => ({
        url: `/reservations-group/set-bidding-date?reservationRequestGroup=${reservationRequestGroup}`,
        method: "PATCH",
        body: biddingDate,
        providesTags: [],
      }),
    }),
    patchSelectBidingWinner: builder.mutation({
      query: ({ reservationRequestGroup, bid }) => ({
        url: `/reservations-group/select-bidding-winner?reservationRequestGroup=${reservationRequestGroup}&bid=${bid}`,
        method: "PATCH",
        providesTags: [],
      }),
    }),
  }),
});

export const {
  usePostReservationGroupMutation,
  useGetAllResGroupsQuery,
  usePostBidsAssignMutation,
  useGetReservationGroupByIDQuery,
  usePatchSetBidingDateMutation,
  usePatchSelectBidingWinnerMutation,
} = resGroupApi;
