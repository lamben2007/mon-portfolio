"use client";

import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

export default function ParagraphWithShapes({ text }: { text: string }) {
    return (
        <div className="relative max-w-3xl mx-auto p-6">
            {/* Paragraphe */}
            <p className="text-lg leading-relaxed text-gray-700 z-10 relative">
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </p>

            {/* Cercles */}
            <motion.div
                className="absolute w-6 h-6 bg-pink-400 rounded-full -top-2.5 left-[-10px] z-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
                className="absolute w-4 h-4 bg-blue-400 rounded-full bottom-[-5px] right-[-5px] z-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />

            {/* Rectangle */}
            <motion.div
                className="absolute w-12 h-2 bg-yellow-300 top-[50%] right-[-20px] z-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Ligne */}
            <motion.div
                className="absolute w-1 h-16 bg-purple-300 top-[-10px] right-[50%] z-0"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            />
        </div>
    );
}
