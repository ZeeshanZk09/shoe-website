"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "../ThemeChanger/ThemeContext";

const GoBackButton = () => {
  const router = useRouter();
  const { isDarkMode } = useTheme();

  return (
    <button onClick={() => router.back()} className="btn">
      <Image
        className={`${isDarkMode ? "invert" : "invert-0"} w-8 h-8`}
        src="/goBack.png"
        alt="alt"
        width={100}
        height={100}
      />
    </button>
  );
};

export default GoBackButton;
