"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeTogglerButton() {
  const { theme , setTheme } = useTheme()
  const changetheme = () => {if (theme === "light") {setTheme("dark")} else {setTheme("light")}}

  return (
        <Button className="bg-transparent hover:bg-slate-200 dark:hover:bg-gray-800" variant="outline" size="icon" onClick={() => changetheme()}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0 duration-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
