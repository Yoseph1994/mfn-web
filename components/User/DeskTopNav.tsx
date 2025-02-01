"use client";
import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DeskTopNav() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-6 text-sm">
      {NavLinks.map((link) =>
        link.children ? (
          <li key={link.name} className="relative group">
            <span className="text-gray-500 transition hover:opacity-75 cursor-pointer">
              {link.name}
            </span>
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {link.children.map((child) => (
                <li key={child.name}>
                  <Link href={child.path}>
                    <span
                      className={`block px-4 py-2 text-sm text-gray-700 hover:opacity-75 cursor-pointer ${
                        pathname === child.path
                          ? "border-b-2 border-blue-500 text-blue-500"
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
                className={`text-gray-500 transition hover:opacity-75 cursor-pointer ${
                  pathname === link.path ||
                  (link.name === "Home" && pathname === "/")
                    ? "border-b-2 border-blue-500 text-blue-500"
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
  );
}

export default DeskTopNav;
