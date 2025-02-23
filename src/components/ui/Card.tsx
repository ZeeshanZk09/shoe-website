import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { TypeData } from "@/db";
import { useTheme } from "../ThemeChanger/ThemeContext";
import Link from "next/link";

const Card: React.FC<TypeData> = ({
  id,
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative flex flex-col items-center gap-4 p-6 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-all duration-300 bg-white text-gray-900 ${
        isDarkMode ? "shadow-gray-800" : "shadow-slate-500"
      } `}
    >
      <div className="relative w-28 h-28  overflow-hidden rounded-lg">
        <Image
          className="object-cover"
          src={img}
          alt={title}
          width={1000}
          height={1000}
        />
      </div>

      <div className="">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-1 mt-2 text-yellow-400">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} className="text-xl" />
          ))}
          <span className="text-sm text-gray-500">{reviews} reviews</span>
        </div>

        <div className="flex items-center  gap-4 w-full mt-3">
          <div className="text-lg font-semibold">
            <del className="text-gray-500 mr-2">{prevPrice}</del>
            <span className="text-green-500">{newPrice}</span>
          </div>
          <Link
            href={`/products/${id}`}
            className="bg-[#d94125] hover:bg-[#d94025e1] text-white text-sm  p-2 rounded-lg flex items-center  gap-1 transition"
          >
            <span>View Details</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
