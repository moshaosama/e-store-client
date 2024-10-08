import {
  createApi,
  EndpointBuilder,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Cart, CheckOut, Products } from "../interfcaes";

export const ProductReducer = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getProduct: builder.query<Products, void>({
      query: () => "product",
    }),
    addCart: builder.mutation({
      query: (id: string) => ({
        method: "POST",
        url: `Cart/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getCart: builder.query<Cart, void>({
      query: () => "Cart",
    }),
    getCheckOuts: builder.query<CheckOut, void>({
      query: () => "checkout",
    }),
    getCheckOutByUser: builder.query<CheckOut, void>({
      query: (_id: any) => `checkout/${_id}`,
    }),
    getCheckOutById: builder.query({
      query: (id: any) => `checkOutByid/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddCartMutation,
  useGetCartQuery,
  useGetCheckOutsQuery,
  useGetCheckOutByUserQuery,
  useGetCheckOutByIdQuery,
} = ProductReducer;
