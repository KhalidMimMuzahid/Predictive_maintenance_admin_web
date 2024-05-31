import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const chartSliceApi = createApi({
  reducerPath: "chartSliceApi",
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
    getMyAllChatList: builder.query({
      query: () => `/messenger/chat/get-my-all-chats`,
      providesTags: [],
    }),
    postSendMessageToChat: builder.mutation({
      query: ({ messageData, chat }) => ({
        url: `/messenger/message/send-message?chat=${chat}`,
        method: "POST",
        body: messageData,
      }),
    }),
  }),
});

export const { useGetMyAllChatListQuery, usePostSendMessageToChatMutation } =
  chartSliceApi;
