import SearchIcon from "@/components/ui/SearchIcon";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import AddProducts from "../AddProducts/AddProducts";
import { TypeData } from "@/db";

type TypeNavigation = {
  inputError?: string;
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  addProducts: Dispatch<SetStateAction<TypeData[]>>;
};

export type HandleAddProductsType = TypeNavigation["addProducts"];

const Navigation = ({
  inputError,
  input,
  handleInputChange,
  handleSearch,
  addProducts,
}: TypeNavigation) => {
  return (
    <div className="  w-full ">
      <div>
        <h2 className="pb-4 text-3xl sm:text-4xl font-bold">Products:</h2>
        <AddProducts addProducts={addProducts} />
      </div>

      {/* ✅ Search Input */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 w-full    shadow-md">
        <input
          className="text-black w-full placeholder:text-slate-500 outline-none text-sm sm:text-base md:text-lg sm:px-2 sm:py-1"
          placeholder="Search a shoe you like"
          maxLength={30}
          value={input}
          onChange={handleInputChange}
          type="search"
          name="search"
          id="search"
          spellCheck={false}
          data-ms-editor="true"
          aria-label="Search a service"
        />
        <button
          type="button"
          className={input ? "grayscale-0" : "grayscale cursor-not-allowed"}
          disabled={!input}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-black transition duration-200" />
        </button>
      </div>

      {inputError && <p className="text-red-500 px-2">{inputError}</p>}
    </div>
  );
};

export default Navigation;
