"use client";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ user }: SiderbarProps) {
  const pathname = usePathname();
  return (
    <header className="sidebar text-blue-800">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 cursor-pointer items-center gap-2 flex"
        >
          <Image
            src="/icons/logo.svg"
            width={24}
            height={24}
            alt="Mudra Mitra Logo"
            className="size-14 max-xl:size-8 "
          />
          <h1 className="sidebar-logo">Mudra Mitra</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            link.route === pathname || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  fill={true}
                  alt={link.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn({ "sidebar-label ": !isActive })}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
