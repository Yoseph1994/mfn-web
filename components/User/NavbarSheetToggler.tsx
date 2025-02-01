"use client";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import Logo from "@/components/User/Logo";

const NavbarSheetToggler = () => {
  const pathname = usePathname();

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="rounded-md bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-white p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-4 items-center">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetHeader>
                <SheetDescription className="text-black mt-2 font-bold text-lg">
                  Discover our community of over 250 churches internationally.
                </SheetDescription>
              </SheetHeader>
            </div>
          </div>
          <nav className="mt-6">
            <ul className="space-y-4">
              {NavLinks.map((link) =>
                link.children ? (
                  <li key={link.name} className="space-y-2">
                    <span className="block text-lg  text-gray-700">
                      {link.name}
                    </span>
                    <ul className="ml-4 mt-2 space-y-2">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.path}>
                            <span
                              className={`block text-base text-gray-600 hover:opacity-75 cursor-pointer ${
                                pathname === child.path
                                  ? "bg-blue-500 py-2 px-4 rounded-md text-white"
                                  : ""
                              }`}
                            >
                              {child.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link href={link.path}>
                      <span
                        className={`block text-lg  text-gray-700 hover:opacity-75 cursor-pointer ${
                          pathname === link.path
                            ? "bg-blue-500 py-2 px-4 rounded-md text-white"
                            : ""
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarSheetToggler;
