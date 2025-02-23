import Input from "@/components/ui/Input";
import React from "react";
import { HandleSetCategoryType } from "../SideBar";

const Color = ({
  handleSetCategory,
}: {
  handleSetCategory: HandleSetCategoryType;
}) => {
  const InputData = [
    {
      id: 0,
      value: "black",
      title: "Black",
      color: "black",
    },
    {
      id: 1,
      value: "blue",
      title: "Blue",
      color: "blue",
    },
    {
      id: 2,
      value: "red",
      title: "Red",
      color: "red",
    },
    {
      id: 3,
      value: "green",
      title: "Green",
      color: "green",
    },
  ];

  return (
    <section>
      <h2 className="sidebar-title color-title">Colors</h2>
      <section className="flex flex-col px-4">
        <label className="sidebar-label-container">
          <input
            onChange={handleSetCategory}
            type="radio"
            value=""
            name="test1"
          />
          <span className="checkmark all"></span>
          All
        </label>
        {InputData.map(({ id, color, title, value }) => (
          <Input
            key={id}
            handleChange={handleSetCategory}
            value={value}
            title={title}
            color={color}
            name="test1"
          />
        ))}
        <label className="sidebar-label-container">
          <input
            onChange={handleSetCategory}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="white checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </section>
    </section>
  );
};

export default Color;
