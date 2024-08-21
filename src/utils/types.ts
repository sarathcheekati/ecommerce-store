
// export type ProductsResponse = {
//   data: Product[];
//   meta: ProductsMeta;
// };

// export type Product = {
//   id: number;
//   attributes: {
//     category: string;
//     company: string;
//     createdAt: string;
//     description: string;
//     featured: boolean;
//     image: string;
//     price: string;
//     publishedAt: string;
//     shipping: boolean;
//     title: string;
//     updatedAt: string;
//     colors: string[];
//   };
// };

// export type ProductsMeta = {
//   categories: string[];
//   companies: string[];
//   pagination: Pagination;
// };

// export type Pagination = {
//   page: number;
//   pageCount: number;
//   pageSize: number;
//   total: number;
// };

//----------------------------------------------------------------------------

import { z } from 'zod';

// Define the zod schemas
const ProductSchema = z.object({
  id: z.number(),
  attributes: z.object({
    category: z.string(),
    company: z.string(),
    createdAt: z.string(),
    description: z.string(),
    featured: z.boolean(),
    image: z.string(),
    price: z.string(),
    publishedAt: z.string(),
    shipping: z.boolean(),
    title: z.string(),
    updatedAt: z.string(),
    colors: z.array(z.string()),
    
  }),
});

const ProductsMetaSchema = z.object({
  categories: z.array(z.string()),
  companies: z.array(z.string()),
  pagination: z.object({
    page: z.number(),
    pageCount: z.number(),
    pageSize: z.number(),
    total: z.number(),
  }),
});

export const ProductsResponseSchema = z.object({
  data: z.array(ProductSchema),
  meta: ProductsMetaSchema,
});

export const ParamsSchema = z.object({
  search:z.string().optional(),
  category:z.string().optional(),
  company:z.string().optional(),
  order:z.string().optional(),
  price:z.string().optional(),
  shipping:z.string().optional(),
  page:z.number().optional()
})

export const FormInputPropsSchema = z.object({
  name:z.string(),
  type:z.string(),
  label:z.string().optional(),
  defaultValue:z.string().optional()

})

// Use the zod types directly
export type Product = z.infer<typeof ProductSchema>;
export type ProductsMeta = z.infer<typeof ProductsMetaSchema>;
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
export type Pagination = z.infer<typeof ProductsMetaSchema>['pagination'];
export type Params = z.infer<typeof ParamsSchema>

export type ProductsResponseWithParams = ProductsResponse & {params:Params}

export type FormInputProps = z.infer<typeof FormInputPropsSchema>

export type SingleProductResponse = {
  data: Product;
  meta: object;
};

export type CartItem = {
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  amount: number;
  productColor: string;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type Checkout = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: CartItem[];
  numItemsInCart: number;
};

export type Order = {
  id: number;
  attributes: {
    address: string;
    cartItems: CartItem[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type OrdersMeta = {
  pagination: Pagination;
};

export type OrdersResponse = {
  data: Order[];
  meta: OrdersMeta;
};