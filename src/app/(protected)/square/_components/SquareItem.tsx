"use client";

// component
import Link from "next/link";
import Image from "next/image";

// type
import { Dream } from "@/types/dream";

interface SquareItemProps {
  dream: Dream;
}

export default function SquareItem({ dream }: SquareItemProps) {
  return (
    <Link href={`/square/${dream.dreamId}`} className="relative aspect-square w-full">
      <Image src={dream.image || ""} alt={`image-${dream.dreamId}`} fill />
    </Link>
  );
}

// TODO: Next.js의 Image 컴포넌트의 fill은 부모 기준으로 적용 => relative 필요
