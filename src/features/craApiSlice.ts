// noinspection SpellCheckingInspection

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IAuthenticationResult from "../interfaces/IAuthenticationResult";
import IGetBaseResult from "../interfaces/IGetBaseResult";

const getHeaders = (token: string) =>
  new Headers([["Authorization", `Bearer ${token}`]]);

export const craApiSlice = createApi({
  reducerPath: "base-api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.REACT_APP_EVALUATE_MODE === "false"
        ? process.env.REACT_APP_API_BASE_URL
        : process.env.REACT_APP_EVALUATE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    authentication: builder.query<IAuthenticationResult, null>({
      query: () => ({
        url: "/Token",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username: process.env.REACT_APP_API_USER,
          password: process.env.REACT_APP_API_PASS,
        },
      }),
    }),
    getBaseData: builder.query<IGetBaseResult, string>({
      query: (token) => ({
        url: "/Get_BaseData",
        headers: getHeaders(token),
      }),
    }),
  }),
});

export const {
  useOperatorComparisonQuery,
  useProvinceComparisonQuery,
  useGetLastUpdateQuery,
  useGetTrendQuery,
  useLazyGetTrendDetailQuery,
  useAuthenticationQuery,
  useGetFutureGoalQuery,
  useGetBaseDataQuery,
  useGetTechnologiesQuery,
  useGetBaseDataWithExtractQuery,
} = craApiSlice;
