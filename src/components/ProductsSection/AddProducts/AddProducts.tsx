import React from "react";
import { HandleAddProductsType } from "../Navigation/Navigation";

const AddProducts = ({
  addProducts,
}: {
  addProducts: HandleAddProductsType;
}) => {
  const handleAddProducts = () => {
    addProducts([]);
  };
  return (
    <div>
      <button
        className="text-slate-500"
        onClick={handleAddProducts}
        type="button"
        disabled
      >
        {""}
      </button>
    </div>
  );
};

export default AddProducts;
