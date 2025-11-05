"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <motion.section
            className="max-w-xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold">Me contacter</h2>
            <p className="text-gray-600">
                Tu veux discuter d’un projet ou simplement dire bonjour ? Envoie-moi un message 👇
            </p>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                <motion.input
                    type="text"
                    placeholder="Nom"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                />
                <motion.input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                />
                <motion.textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                />
                <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Envoyer
                </motion.button>
            </form>
        </motion.section>
    );
}
