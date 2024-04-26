import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockedUrls = [
  "https://utfs.io/f/855faac1-4296-480a-a82d-b4854f0b5681-o7koab.jpg",
  "https://utfs.io/f/db696b0a-a4ce-4c24-82ea-46b8dac7b089-4mjk8k.jpg",
  "https://utfs.io/f/1ae062f9-71fc-4146-b8a5-9761101d9a15-3g3ep5.jpg",
  "https://utfs.io/f/be75f3aa-d2cd-4d3e-abe9-e8f75e9f983d-62s736.jpg",
  "https://utfs.io/f/1861bd23-cb2e-4232-a588-94590e0e5315-yu4hap.jpg",
];

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (image, { desc }) => desc(image.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <img className="w-96 p-2" src={image.url} />
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
