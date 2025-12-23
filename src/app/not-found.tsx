import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-xl p-lg">
      <Image src="/404.png" alt="404" width={400} height={400} />
      <p className="text-h1 font-bold text-white">NOT FOUND</p>
      <Link href="/" className="flex w-full justify-center">
        <Button size="lg" variant="primary" rounded="lg">
          <p>Return Home</p>
        </Button>
      </Link>
    </div>
  );
}
