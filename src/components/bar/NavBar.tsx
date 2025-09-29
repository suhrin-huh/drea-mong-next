"use client";

// library
import { usePathname } from "next/navigation";

// component
import Link from "next/link";
import { ImPlay, ImPencil, ImHome, ImCog, ImCloud } from "react-icons/im";

export default function NavBar() {
  const pathname = usePathname();
  console.log("pathname변경");
  const pages = [
    {
      name: "HOME",
      href: "/",
      icon: ImHome,
    },
    {
      name: "SQUARE",
      href: "/square",
      icon: ImCloud,
    },
    {
      name: "DREAM",
      href: "/dream/new",
      icon: ImPencil,
    },
    {
      name: "STREAM",
      href: "/stream",
      icon: ImPlay,
    },
    {
      name: "SETTINGS",
      href: "/settings",
      icon: ImCog,
    },
  ];

  return (
    <nav className="flex h-[70px] justify-between gap-x-3 bg-white p-1 px-5 text-xs">
      {pages.map(({ name, icon: Icon, href }) => {
        const isActive = `${pathname}/`.startsWith(href + "/");
        const activeClass = isActive
          ? "text-primary hover:text-primary-hover"
          : "text-secondary hover:text-secondary-hover";

        return (
          <Link
            href={href}
            key={name}
            className={`flex flex-col items-center justify-center transition-colors duration-200 ${activeClass}`}
          >
            <Icon size={25} className="aspect-square" />
            <p>{name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
