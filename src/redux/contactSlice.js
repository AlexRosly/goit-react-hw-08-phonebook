import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import authOperations from "../redux/auth/auth-operations";

const temporaryToken = authOperations.temporalToken;

export const contactApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => ({
        url: "/contacts",
        method: "GET",
        headers: temporaryToken,
      }),
      providesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
        headers: temporaryToken,
      }),
      invalidatesTags: ["Contact"],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: "POST",
        body: {
          name,
          number,
        },
        headers: temporaryToken,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;
