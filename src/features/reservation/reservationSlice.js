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

    getReservationRequestByID: builder.query({
      query: (_id) => `/reservation/all-reservation-by-user?user=${_id}`,
    }),
    getReservationOverview: builder.query({
      query: (machineType) =>
        `/reservation/all-reservation-count?machineType=${machineType}`,
    }),
    getReservationCountByServiceProviderCompany: builder.query({
      query: (serviceProviderCompany) =>
        `/reservation/get-reservation-count-by-service-provider-company?serviceProviderCompany=${serviceProviderCompany}`,
    }),
    getReservationRequestByCompanyId: builder.query({
      query: (_id) =>
        `/reservation/all-reservation-by-service-provider-company?serviceProviderCompany=${_id}`,
    }),

    getAllScheduledReservationRequestByCompanyId: builder.query({
      query: (_id) =>
        `/reservation/all-scheduled-reservation-by-service-provider-company?serviceProviderCompany=662ccd0371f671e149afb41d`,
    }),
  }),
});

export const {
  useGetAllReservationQuery,
  useGetShowaUserInfoQuery,
  useGetReservationRequestByIDQuery,
  useGetReservationOverviewQuery,
  useGetReservationCountByServiceProviderCompanyQuery,
  useGetReservationRequestByCompanyIdQuery,
  useGetAllScheduledReservationRequestByCompanyIdQuery,
} = reservationApi;
