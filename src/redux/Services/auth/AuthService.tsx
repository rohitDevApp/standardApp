import {METHODS} from '@constants/enum/Api';
import {BASE_URL, URLS} from '@constants/enum/Urls';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ReduxType from '@utils/types/reduxType';

export const AuthService = createApi({
  reducerPath: 'Auth',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    //userLogin
    userLogin: builder.mutation<any, ReduxType.loginArg>({
      query: credentials => ({
        url: URLS.LOGIN_URL,
        method: METHODS.POST,
        body: credentials,
      }),
    }),

    //userSignup
    userSignup: builder.mutation<any, ReduxType.SignUpArg>({
      query: credentials => ({
        url: URLS.SIGNUP_URL,
        method: METHODS.POST,
        body: credentials,
      }),
    }),
  }),
});
export const {useUserLoginMutation, useUserSignupMutation} = AuthService;
