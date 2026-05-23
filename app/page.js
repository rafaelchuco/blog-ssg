import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">Blog con SSG en Next.js</h1>
      <p className="mb-8 text-lg text-zinc-700">
        Demo de rutas dinámicas estáticas con <code>generateStaticParams</code>.
      </p>

      <Link
        href="/posts"
        className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
      >
        Ir a la lista de posts
      </Link>
    </main>
  );
}
