import { mapPostToSpanish } from "../postTranslations";

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    throw new Error("No se pudo cargar el post");
  }

  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("No se pudieron cargar los IDs de posts");
  }

  const posts = await res.json();

  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = mapPostToSpanish(await getPost(id));

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
    </main>
  );
}
