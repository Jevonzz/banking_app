"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 items-center cursor-pointer gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          // Check if the current pathname matches the item's route
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          // Determine the active class based on the isActive boolean
          const activeClass = isActive ? "sidebar-link-active" : "";

          return (
            <Link
              key={item.label} // Use the item's label as the unique key for the Link component
              href={item.route} // Set the link's href to the item's route
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })} // Apply conditional classes
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  fill
                  alt={item.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                {/* Render the item's image */}
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label} {/* Render the item's label */}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      <Footer user={user} type="desktop" />
    </section>
  );
};

export default Sidebar;
