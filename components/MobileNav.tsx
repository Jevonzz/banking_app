"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import React from "react";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center cursor-pointer gap-1 px-4"
            >
              <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
              <h1 className="text-26 font-ibm-plex-serif font-bold">Horizon</h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    // Check if the current pathname matches the item's route
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);

                    // Determine the active class based on the isActive boolean
                    const activeClass = isActive ? "sidebar-link-active" : "";

                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          key={item.label} // Use the item's label as the unique key for the Link component
                          href={item.route} // Set the link's href to the item's route
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })} // Apply conditional classes
                        >
                          <Image
                            src={item.imgURL}
                            width={20}
                            height={20}
                            alt={item.label}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                          {/* Render the item's image */}
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "text-white": isActive,
                              }
                            )}
                          >
                            {item.label} {/* Render the item's label */}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
            </div>
            USER
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
