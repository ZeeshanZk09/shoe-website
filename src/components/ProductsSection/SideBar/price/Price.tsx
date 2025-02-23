import React from "react";
import { HandleSetCategoryType } from "../SideBar";
import Input from "@/components/ui/Input";

const Price = ({
  handleSetCategory,
}: {
  handleSetCategory: HandleSetCategoryType;
}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <section className="flex flex-col px-4">
        <label className="sidebar-label-container">
          <input
            onChange={handleSetCategory}
            type="radio"
            value=""
            name="test2"
          />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleSetCategory}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleSetCategory}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleSetCategory}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleSetCategory}
          value={200}
          title="Over $150"
          name="test2"
        />
      </section>
    </div>
  );
};

export default Price;
