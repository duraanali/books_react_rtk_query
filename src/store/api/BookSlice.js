import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8000";

export const bookSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({

    // Fetch Notes
    fetchBooks: builder.query({
      query: () => {
        return {
          url: "books",
          method: "GET",
        };
      },
      providesTags: ["Books"],
    }),

    // Add Note
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    // Edit Note
    editBook: builder.mutation({
      query: ({ bookId, updatedBook }) => ({
        url: `books/${bookId}`,
        method: "PUT",
        body: updatedBook,
      }),
      invalidatesTags: ["Books"],
    }),

    // Delete Note
    deleteBook: builder.mutation({
        query: (bookId) => ({
            url: `books/${bookId}`,
            method: "DELETE",
        }),
        invalidatesTags: ["Books"],
    }),
  }),
});

export const { useFetchBooksQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation } = bookSlice;
console.log(bookSlice)
export default bookSlice.reducer;
