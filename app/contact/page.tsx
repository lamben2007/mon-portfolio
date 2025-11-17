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

    // État pour gérer les erreurs de validation
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Référence du formulaire pour envoi via emailjs
    const form = useRef<HTMLFormElement>(null);

    // Gère la modification des champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(prev => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [e.target.name]: _, ...rest } = prev;
            return rest;
        });
    };

    // Validation centralisée du formulaire
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est obligatoire";
        if (!formData.firstname.trim()) newErrors.firstname = "Le prénom est obligatoire";
        if (!formData.email.trim()) newErrors.email = "L'email est obligatoire";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "L'email n'est pas valide";
        if (!formData.company.trim()) newErrors.company = "La société est obligatoire";
        if (!formData.message.trim()) newErrors.message = "Le message est obligatoire";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Variables d'environnement EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceID || !templateId || !userID) {
        throw new Error("Please check your environment variables.");
    }

    // Gère l'envoi du formulaire et l'envoi de l'email via emailjs
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSending(true);
        setStatusMessage("Message en cours d'envoi...");

        if (!form.current) {
            setStatusMessage("Erreur : le formulaire n’est pas accessible.");
            setIsSending(false);
            return;
        }
        const currentForm = form.current;

        //
        emailjs
            .sendForm(serviceID, templateId, currentForm, userID)
            .then(() => {
                setStatusMessage("Votre message a été envoyé avec succès.");
                setFormData({ name: "", firstname: "", email: "", company: "", message: "" });
                currentForm.reset();
                setErrors({}); // Réinitialiser les erreurs après succès
            })
            .catch(() => {
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

            {Object.values(errors).length > 0 && (
                <div className="text-red-600 mb-3">
                    Merci de corriger les erreurs avant de valider le formulaire.
                </div>
            )}

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
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

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
                {errors.firstname && <div className="text-red-500 text-sm">{errors.firstname}</div>}

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
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

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
                {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}

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
                {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}

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
            {statusMessage && <span>{statusMessage}</span>}

        </motion.section>
    );
}
