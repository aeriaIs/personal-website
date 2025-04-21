"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MenuIcon, MountainIcon, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { ToggleTheme } from "@/components/theme/toggle-button";

function Navbar() {
  const menus = [
    { title: "Home", path: "#home" },
    { title: "About Us", path: "#about-me" },
    { title: "Contact", path: "#contact" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <header className="w-full h-16 bg-transparent">
      <Container className="w-full h-full flex justify-between items-center shrink-0 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-5 w-5" />
          <p className="text-lg font-semibold">Aerials</p>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>Menu</SheetTitle>
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="#home" className="w-full flex items-center py-2 text-lg font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="w-full flex items-center py-2 text-lg font-semibold" prefetch={false}>
                About
              </Link>
              <Link href="#" className="w-full flex items-center py-2 text-lg font-semibold" prefetch={false}>
                Services
              </Link>
              <ToggleTheme />
            </div>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex lg:items-center gap-5">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="flex flex-col justify-center items-center py-2 font-semibold hover:text-muted-foreground"
              prefetch={false}
            >
              {menu.title}
            </Link>
          ))}
          <ToggleTheme />
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
