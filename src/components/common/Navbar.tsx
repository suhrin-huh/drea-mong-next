"use client";

/**component */
import Link from "next/link";

/**library */
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

/** icons */
import type { IconType } from "react-icons/lib";
import { ImPlay, ImPencil, ImHome, ImCog, ImCloud } from "react-icons/im";

interface IconWrapperProps {
  icon: ComponentType<{ className?: string; size?: number }>; // 이 타입에 대해서 제대로 모르는거 아닐까..??
  size: number;
  isActive?: boolean;
}

function IconWrapper({ icon: Icon, size, isActive }: IconWrapperProps) {
  const iconClass = `aspect-square transition-colors duration-200 ${
    isActive
      ? "text-primary group-hover:text-primary-hover"
      : "text-secondary group-hover:text-secondary-hover"
  }`;
  return <Icon size={size} className={iconClass} />;
}

type Page = {
  name: string;
  href: string;
  icon: IconType;
}[];

export default function Navbar() {
  const pathname = usePathname();

  const pages: Page = [
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
      {pages.map((page) => {
        const isActive = pathname == page.href;
        return (
          <Link
            href={page.href}
            key={page.name}
            className="group flex flex-col items-center justify-center"
          >
            <IconWrapper icon={page.icon} size={25} isActive={isActive} />
            <p
              className={
                isActive
                  ? "text-primary group-hover:text-primary-hover"
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
