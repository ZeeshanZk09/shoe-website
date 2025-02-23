import React from "react";
import productData from "@/db";
import { BsFillBagFill } from "react-icons/bs";

const ProductById = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productsById = +(await params).productId;
  const productMatchingByParams = productData.find(
    (pd) => pd.id === productsById
  );
  return (
    <div>
      {productMatchingByParams?.id}
      <BsFillBagFill />
    </div>
  );
};

export default ProductById;
