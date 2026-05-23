import Link from "next/link";
import { mapPostToSpanish } from "./postTranslations";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("No se pudieron cargar los posts");
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  const spanishPosts = posts.slice(0, 10).map(mapPostToSpanish);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Lista de Posts</h1>

      <ul className="space-y-3">
        {spanishPosts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
          >
            <span className="pr-4 font-medium">{post.title}</span>
            <Link
              href={`/posts/${post.id}`}
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              Ver Post
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
