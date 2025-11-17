"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//
export default function ContactPage() {

    // État pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        name: "",
        firstname: "",
        email: "",
        company: "",
        message: "",
    });

    // État pour afficher les messages de statut d'envoi
    const [statusMessage, setStatusMessage] = useState<string>("");

    // État pour indiquer si un envoi est en cours
    const [isSending, setIsSending] = useState(false);

    // Référence du formulaire pour envoi via emailjs
    const form = useRef<HTMLFormElement>(null);

    // Gère la modification des champs du formulaire
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        // const handleChange = (e) => {


        // console.log("e.target:", e.target.name)

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    //
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceID || !templateId || !userID) {
        throw new Error("Please check your environment variables.");
    }


    // Gère l'envoi du formulaire et l'envoi de l'email via emailjs
    const sendEmail = (e: { preventDefault: () => void; }) => {

        //
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        setIsSending(true); // Indique que l'envoi est en cours
        setStatusMessage("Message en cours d'envoi..."); // Affiche un message d'attente


        // Vérifie que form.current n'est pas null AVANT de l'utiliser
        if (!form.current) {
            setStatusMessage("Erreur : le formulaire n’est pas accessible.");
            setIsSending(false);
            return;
        }

        // Capture dans une variable locale
        const currentForm = form.current;

        //
        emailjs.sendForm(
            serviceID,
            templateId,
            currentForm,
            userID
        )
            .then((result) => {
                console.log("Email envoyé avec succès :", result);
                setStatusMessage("Votre message a été envoyé avec succès.");
                setFormData({ name: "", firstname: "", email: "", company: "", message: "" });
                currentForm.reset();
            })
            .catch((error) => {
                console.log("Échec envoi email", error);
                setStatusMessage("Une erreur est survenue lors de l'envoi de votre message.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };


    //
    return (
        <motion.section
            className="max-w-xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-3xl font-bold">Formulaire de Contact</h1>

            <form ref={form} className="space-y-4 text-left" onSubmit={sendEmail}>

                {/* Nom */}
                <motion.input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    value={formData.name}
                    onChange={handleChange}
                />

                {/* Prénom */}
                <motion.input
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    value={formData.firstname}
                    onChange={handleChange}
                />

                {/* Email */}
                <motion.input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* Société */}
                <motion.input
                    type="text"
                    name="company"
                    placeholder="Société"
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    value={formData.company}
                    onChange={handleChange}
                />

                {/* Message */}
                <motion.textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    className="w-full border p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    value={formData.message}
                    onChange={handleChange}
                />

                {/* Bouton Envoyer */}
                <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    disabled={isSending}
                >
                    {isSending ? "Envoi en cours..." : "Envoyer"}
                </motion.button>
            </form>


            {/* Message de statut après l'envoi */}
            {/* {statusMessage && <Alert className="mt-3" variant={isSending ? "info" : "success"}>{statusMessage}</Alert>} */}
            {statusMessage && <span>{statusMessage}</span>}

        </motion.section>
    );
}
