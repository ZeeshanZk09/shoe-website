import React from "react";
import Input from "@/components/ui/Input";
import { HandleSetCategoryType } from "../SideBar";

const Category = ({
  handleSetCategory,
}: {
  handleSetCategory: HandleSetCategoryType;
}) => {
  interface InputDataType {
    id: number;
    inputValue: string;
    shoeTitle: string;
  }

  const InputData: InputDataType[] = [
    {
      id: 0,
      inputValue: "sneakers",
      shoeTitle: "Sneakers",
    },
    {
      id: 1,
      inputValue: "flats",
      shoeTitle: "Flats",
    },
    {
      id: 2,
      inputValue: "sandals",
      shoeTitle: "Sandals",
    },
    {
      id: 3,
      inputValue: "heels",
      shoeTitle: "Heels",
    },
  ];

  return (
    <section>
      <h2 className="sidebar-title">Category</h2>

      <section className="flex flex-col px-4">
        <label className="sidebar-label-container">
          <input
            onChange={handleSetCategory}
            type="radio"
            value=""
            name="test"
          />
          <span className="checkmark"></span>All
        </label>
        {InputData.map(({ id, inputValue, shoeTitle }) => (
          <Input
            key={id}
            handleChange={handleSetCategory}
            value={inputValue}
            title={shoeTitle}
            name="test"
          />
        ))}
      </section>
    </section>
  );
};

export default Category;
