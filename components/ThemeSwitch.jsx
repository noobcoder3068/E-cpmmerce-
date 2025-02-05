"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
export default function ThemeSwitcher() {
const [mounted, setMounted] = useState(false);
const { theme, setTheme } = useTheme();
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) {
return null;
}
return (
<button
className={`w-fit p-2 text-green-500 dark:text-green-700 rounded-md hover:scale-110 active:scale-100 duration-200 dark:bg-
[#212933]`}
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
{theme === "light" ? <Moon /> : <Sun />}
</button>
);
}