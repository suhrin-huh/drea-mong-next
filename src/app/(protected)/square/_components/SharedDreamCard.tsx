"use client";

// component
import Link from "next/link";
import Image from "next/image";

// type
import { SharedDreamSummary } from "@/types";

interface SharedDreamCardProps {
  dream: SharedDreamSummary;
}

export default function SharedDreamCard({ dream }: SharedDreamCardProps) {
  return (
    <Link
      key={`dream-${dream.dreamId}`}
      href={`/square/${dream.dreamId}`}
      className="relative aspect-square w-full"
    >
      <Image src={dream.image || ""} alt={`image-${dream.dreamId}`} fill />
    </Link>
  );
}

// TODO: Next.js의 Image 컴포넌트의 fill은 부모 기준으로 적용 => relative 필요
