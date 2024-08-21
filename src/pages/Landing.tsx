import { FeaturedProducts, Hero } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import {
  customFetchInstance,
  ProductsResponseSchema,
  type ProductsResponse,
} from "@/utils";

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetchInstance<ProductsResponse>(url);
  const validatedResponse = ProductsResponseSchema.safeParse(response.data);
  return validatedResponse.data!;
};
