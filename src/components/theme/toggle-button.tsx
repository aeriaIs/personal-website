import { Check, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useTheme } from "@/hooks/use-theme";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="w-full flex flex-row items-center">
          <p>Light</p> {theme === "light" && <Check />}{" "}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="w-full flex flex-row items-center">
          <p>Dark</p> {theme === "dark" && <Check />}{" "}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="w-full flex flex-row items-center">
          <p>System</p> {theme === "system" && <Check />}{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
