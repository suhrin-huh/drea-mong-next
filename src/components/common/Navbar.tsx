"use client";

import Link from "next/link";
import { TbAppleFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

type Page = {
  name: string;
  href: string;
  icon: (isActive: boolean) => React.ReactNode;
}[];

export default function Navbar() {
  const pathname = usePathname();
  const iconClass = "h-[35px] aspect-square";
  const pages: Page = [
    {
      name: "HOME",
      href: "/",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary"}`}
        />
      ),
    },
    {
      name: "SQUARE",
      href: "/square",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary"}`}
        />
      ),
    },
    {
      name: "DREAM",
      href: "/dream/new",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary"}`}
        />
      ),
    },
    {
      name: "STREAM",
      href: "/stream",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary"}`}
        />
      ),
    },
    {
      name: "SETTINGS",
      href: "/settings",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary"}`}
        />
      ),
    },
  ];
  return (
    <nav className="flex h-[80px] justify-between gap-x-3 bg-white p-5 text-xs font-bold">
      {pages.map((page) => {
        const isActive = pathname == page.href;
        return (
          <Link
            href={page.href}
            key={page.name}
            className={`group flex flex-col items-center justify-center`}
          >
            {page.icon(isActive)}
            <p
              className={
                isActive
                  ? `text-primary group-hover:text-primary-hover`
                  : "text-secondary group-hover:text-secondary-hover"
              }
            >
              {page.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
