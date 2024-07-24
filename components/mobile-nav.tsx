"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import hamburger from "@/public/icons/hamburger.svg";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <section className="">
      {/*w-full max-w-[264px] */}
      <Sheet>
        <SheetTrigger>
          <Image src={hamburger} alt="menu button" width={24} height={24} />
        </SheetTrigger>
        <SheetContent className="bg-slate-200">
          <nav className="flex flex-col gap-4">
            <Link
              href={"/"}
              className="mb-4 cursor-pointer flex items-center gap-6"
            >
              <Image
                src="/icons/logo.svg"
                width={24}
                height={24}
                alt="Mudra Mitra Logo"
                className="size-14 max-xl:size-8 "
              />
              <h1 className="font-inter text-black-2 text-xl font-semibold">
                Mudra Mitra
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <div className="flex flex-col h-full gap-6  text-white">
                  {" "}
                  {sidebarLinks.map((link) => {
                    const isActive =
                      link.route === pathname ||
                      pathname.startsWith(`${link.route}/`);

                    return (
                      <SheetClose asChild>
                        <Link
                          href={link.route}
                          key={link.route}
                          className={cn("sidebar-link px-2 !justify-start", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <div className="relative size-6">
                            <Image
                              src={link.imgURL}
                              fill={true}
                              alt={link.label}
                              className={cn({
                                "brightness-[3] invert-0": isActive,
                              })}
                            />
                          </div>
                          <p
                            className={cn("text-white text-16 font-semibold", {
                              " text-black-2": !isActive,
                            })}
                          >
                            {link.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetClose>
            </div>
            USER
          </nav>
          FOOTER
        </SheetContent>
      </Sheet>
    </section>
  );
}
