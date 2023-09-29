"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  const currentThem = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div className="flex">
      {mounted && currentThem === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-300"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer hover:text-amber-300"
        />
      )}
    </div>
  );
}

export default DarkModeSwitch;
