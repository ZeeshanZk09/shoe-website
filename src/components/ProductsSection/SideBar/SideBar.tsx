import React, { ChangeEvent } from "react";
import Price from "./price/Price";
import Category from "./category/Category";
import Color from "./color/Color";

type SideBarType = {
  className?: string;
  handleSetCategory: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type HandleSetCategoryType = SideBarType["handleSetCategory"];

const SideBar = ({ className, handleSetCategory }: SideBarType) => {
  return (
    <div
      className={`${className} flex flex-col items-start  pr-10  w-fit min-h-screen`}
    >
      <Category handleSetCategory={handleSetCategory} />
      <Color handleSetCategory={handleSetCategory} />
      <Price handleSetCategory={handleSetCategory} />
    </div>
  );
};

export default SideBar;
