import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Album {
  userId: number;
  id: number;
  title: string;
}

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
