import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className="px-10 py-20">
      <h1>This Page is in constructing phase</h1>
      <span className="inline">
        Visit Products --&gt;{" "}
        <Link href="/products" className="inline text-blue-700 underline">
          Products
        </Link>{" "}
      </span>
    </main>
  );
};

export default HomePage;
