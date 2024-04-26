import { db } from "~/server/db";

const mockedUrls = [

"https://utfs.io/f/855faac1-4296-480a-a82d-b4854f0b5681-o7koab.jpg",
"https://utfs.io/f/db696b0a-a4ce-4c24-82ea-46b8dac7b089-4mjk8k.jpg",
"https://utfs.io/f/1ae062f9-71fc-4146-b8a5-9761101d9a15-3g3ep5.jpg",
"https://utfs.io/f/be75f3aa-d2cd-4d3e-abe9-e8f75e9f983d-62s736.jpg",
"https://utfs.io/f/1861bd23-cb2e-4232-a588-94590e0e5315-yu4hap.jpg"

];
const mockedImages = mockedUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {
          posts.map(post => (
            <span key={post.id}>{post.name}</span>
        ))
        }
        {[...mockedImages, ...mockedImages, ...mockedImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-2">
            <img src={image.url}  />
          </div>
        ))}

      </div>
    </main>
  );
}
