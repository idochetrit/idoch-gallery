import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-64  p-2">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt={image.name} height={256} width={256} />
            <span className="text-wrap text-sm font-light">{image.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-2">
        <SignedIn>
          <Images />
        </SignedIn>
        <SignedOut>
          <span className="h-full w-full text-center text-2xl">
            Please sign in.
          </span>
        </SignedOut>
      </div>
    </main>
  );
}
