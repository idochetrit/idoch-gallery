import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="h-96 w-96 p-2">
          <Image src={image.url} alt={image.name} height={384} width={384} />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
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
