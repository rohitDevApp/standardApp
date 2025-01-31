import {METHODS} from '@constants/enum/Api';
import {BASE_URL, URLS} from '@constants/enum/Urls';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ReduxType from '@utils/types/reduxType';

export const Common = createApi({
  reducerPath: 'Common',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    //Post Or Insert
    postMutation: builder.mutation({
      query: credentials => ({
        url: URLS.LOGIN_URL,
        method: METHODS.POST,
        body: credentials,
      }),
    }),

    //Delete Method
    deletemutation: builder.mutation<any, ReduxType.deleteArg>({
      query: ({id, token}): any => ({
        url: `${URLS.LOGIN_URL}/${id}`,
        method: METHODS.DELETE,
        headers: {auth: token},
      }),
    }),

    //Update Job Post
    updatemutation: builder.mutation<any, ReduxType.updateArg>({
      query: ({token, id, updateData}): any => ({
        url: `${URLS.LOGIN_URL}/${id}`,
        method: METHODS.PUT,
        body: updateData,
        headers: {auth: token},
      }),
    }),
  }),
});

export const {
  usePostMutationMutation,
  useDeletemutationMutation,
  useUpdatemutationMutation,
} = Common;
