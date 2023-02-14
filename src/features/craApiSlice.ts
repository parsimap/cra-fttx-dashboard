// noinspection SpellCheckingInspection

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IAuthenticationResult from "../interfaces/IAuthenticationResult";
import IGetBaseResult from "../interfaces/IGetBaseResult";
import IApiResult from "@/src/interfaces/IApiStatus";
import {IGetTrendDetailQuery} from "@/src/interfaces/IGetTrendDetail";
import ITrendDetailResult from "@/src/interfaces/ITrendDetail";
import ITechnologyTrend from "@/src/interfaces/ITechnologyTrend";

const getHeaders = (token: string) =>
  new Headers([["Authorization", `Bearer ${token}`]]);

export const craApiSlice = createApi({
  reducerPath: "base-api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    authentication: builder.query<IAuthenticationResult, null>({
      query: () => ({
        url: "/Token",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: {
          username: process.env.NEXT_PUBLIC_API_USER,
          password: process.env.NEXT_PUBLIC_API_PASS,
        },
      }),
    }),
    getBaseData: builder.query<IGetBaseResult, string>({
      query: (token) => ({
        url: "/Get_BaseData",
        headers: getHeaders(token),
      }),
    }),
    getTrendDetail: builder.query<
      IApiResult<ITrendDetailResult[]>,
      IGetTrendDetailQuery
    >({
      query: ({token, DurationType, operators, province}) => ({
        url: "/Get_TrendDetail",
        params: new URLSearchParams([
          ["province", String(province)],
          ["operators", String(operators)],
          ["Durationtype", String(DurationType)],
        ]),
        headers: getHeaders(token),
      }),
    }),
    getTrend: builder.query<IApiResult<ITechnologyTrend[]>, string>({
      query: (token) => ({
        url: "/Get_Trend",
        headers: getHeaders(token),
      }),
    }),
  }),
});

export const {
  useGetTrendQuery,
  useLazyGetBaseDataQuery,
  useAuthenticationQuery,
  useGetTrendDetailQuery
}
  = craApiSlice;
