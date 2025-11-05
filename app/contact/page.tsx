"use client";

export default function ContactPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Message envoyé (simulation)");
    };

    return (
        <section className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Me contacter</h2>
            <p className="text-gray-600">
                Tu veux discuter d’un projet, d’une collaboration ou simplement dire
                bonjour ? Envoie-moi un message 👇
            </p>

            <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    className="w-full border p-3 rounded-lg"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    className="w-full border p-3 rounded-lg"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Envoyer
                </button>
            </form>
        </section>
    );
}
