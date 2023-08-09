import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Constants from 'Constants'
import { CACHE_TAG_TYPES } from './cacheTagTypes'

const { SERVER_URL } = Constants

export const api = createApi({
  reducerPath: "apiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  tagTypes: CACHE_TAG_TYPES,
  endpoints: () => ({}),
});
export default api;