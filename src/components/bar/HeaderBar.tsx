"use client";

// library
import { useRouter } from "next/navigation";

// components
import { IoIosArrowBack } from "react-icons/io";

interface HeaderBarProps {}

export default function HeaderBar({}: HeaderBarProps) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="text-white">
      <button onClick={handleBack} className="text-xl">
        <IoIosArrowBack />
      </button>
    </div>
  );
}
