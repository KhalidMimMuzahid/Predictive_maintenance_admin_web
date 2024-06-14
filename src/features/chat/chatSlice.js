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
    getLastMessageByChat: builder.query({
      query: (chat) =>
        `messenger/message/get-last-message-by-chat?chat=${chat}`,
      providesTags: [],
    }),
    getMessagesByChat: builder.query({
      query: (chat) => `messenger/message/get-messages-by-chat?chat=${chat}`,
      providesTags: [],
    }),

    getChatByChatId: builder.query({
      query: (chat_id) =>
        `messenger/chat/get-chat-by-chat_id?chat_id=${chat_id}`,
      providesTags: [],
    }),
    getUsersInformationByUsers: builder.mutation({
      query: (usersArrayObject) => ({
        url: `/user/get-users-info-by-users-array?rootUserFields=_id phone role&extendedUserFields=name photoUrl`,
        method: "POST",
        body: usersArrayObject,
      }),
      providesTags: [],
    }),
    postSendMessageToChat: builder.mutation({
      query: ({ messageData, chat }) => ({
        url: `/messenger/message/send-message?chat=${chat}`,
        method: "POST",
        body: messageData,
      }),
    }),
    postCreatePersonalChatByEmailOrPhone: builder.mutation({
      query: (phoneOrEmail) => ({
        url: `/messenger/chat/create-personal-chat-by-phone-or-email?phoneOrEmail=${phoneOrEmail}`,
        method: "POST",
        body: "",
      }),
    }),
  }),
});

export const {
  useGetMyAllChatListQuery,
  useGetLastMessageByChatQuery,
  useGetMessagesByChatQuery,
  useGetChatByChatIdQuery,
  useGetUsersInformationByUsersMutation,
  usePostSendMessageToChatMutation,
  usePostCreatePersonalChatByEmailOrPhoneMutation,
} = chartSliceApi;
