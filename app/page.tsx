import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center space-y-6 border border-black">
      <h2 className="text-3xl font-bold mt-8">Bienvenue sur mon portfolio 👋</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        Je suis un développeur passionné, spécialisé dans la création
        d’expériences web modernes et performantes.
      </p>
      <Link
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Voir mes projets
      </Link>
    </section>
  );
}
