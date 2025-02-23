"use client";
import React, { ChangeEvent, JSX, useState } from "react";
import data, { TypeData } from "@/db";
import Card from "@/components/ui/Card";
import SideBar from "@/components/ProductsSection/SideBar/SideBar";
import Navigation from "@/components/ProductsSection/Navigation/Navigation";
import { useTheme } from "@/components/ThemeChanger/ThemeContext";

const ProductsPage = () => {
  const [input, setInput] = useState<string>(""); // ✅ Input box value
  const [searchQuery, setSearchQuery] = useState<string>(""); // ✅ Actual search query
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [productData, setProductData] = useState<TypeData[]>(data);
  const [error, setError] = useState("");
  const { isDarkMode } = useTheme();

  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    const inputValue = e.target.value;
    const maxLength = 30;
    const regex = /^[a-zA-Z0-9\s]*$/;

    if (inputValue.length > maxLength) {
      setError(`Input cannot exceed ${maxLength} characters.`);
      return;
    }

    if (!regex.test(inputValue)) {
      setError("Only alphanumeric characters are allowed.");
      return;
    }

    setError("");
    setInput(inputValue); // ✅ Input box ko update karega
  };

  const handleSetCategory = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCategory(e.target.value);
  };

  // ✅ Button click hone par search hoga
  const handleSearch = () => {
    setSearchQuery(input); // ✅ Jo likha tha usko as search query store karna
  };

  // ✅ SearchQuery ka istemal karke filter hoga
  function filterData(
    products: TypeData[],
    selected: string | null,
    query: string
  ): JSX.Element[] {
    let filteredData = products;

    if (query) {
      filteredData = filteredData.filter(
        (p) => p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredData = filteredData.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredData.map(
      ({ id, img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterData(productData, selectedCategory, searchQuery);

  return (
    <main className="flex overflow-x-hidden justify-between items-start min-h-screen w-screen px-4 py-20 xl:px-8 xl:py-4">
      <SideBar
        handleSetCategory={handleSetCategory}
        className="xl:flex hidden"
      />
      <section
        className={`${
          isDarkMode ? "sm:bg-slate-600" : "sm:bg-[#e9e9e9]"
        } max-w-[1300px] w-full sm:shadow-xl sm:shadow-slate-900 sm:w-screen  rounded-lg sm:py-16 sm:px-4 flex flex-col min-h-screen`}
      >
        <Navigation
          inputError={error}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          input={input}
          addProducts={setProductData}
        />

        {/* ✅ Display Filtered Results */}
        <section className=" py-4 w-full   gap-5 xl:gap-5 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4 grid-flow-row-dense ">
          {result}
        </section>
      </section>
    </main>
  );
};

export default ProductsPage;
