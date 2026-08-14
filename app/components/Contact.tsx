import { motion } from "framer-motion";
import { Download, Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SOCIALS } from "@/utils/constants/constant";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactMessage } from "@/services/contact.services";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";

export function Contact() {
    const [isSendingMessage, setIsSendingMessage] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Name must be at least 2 characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Enter a valid email")
                .required("Email is required"),

            message: Yup.string()
                .min(10, "Message should be at least 10 characters")
                .required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                setIsSendingMessage(true);
                const response = await sendContactMessage(values);
                toast.add({
                    type: "success",
                    description: "Message sent successfully!",
                })
                resetForm();
            } catch (err) {
                console.error(err);
                toast.add({
                    type: "error",
                    description: "Something went wrong. Please try again later.",
                })
            } finally {
                setIsSendingMessage(false);
            }
        }
    });

    return (
        <section id="contact" className="relative py-28">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <SectionHeader
                    eyebrow="Contact"
                    title="Let's build something"
                    description="Have a project in mind or just want to say hi? I read every message."
                />

                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-between gap-6 rounded-3xl glass p-8"
                    >
                        <div className="space-y-4">
                            <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-3 text-sm text-foreground/90 transition hover:text-[#28C3EF]">
                                <span className="h-10 w-10 flex items-center justify-center rounded-xl border border-border">
                                    <Mail className="h-4 w-4" />
                                </span>
                                {SOCIALS.email}
                            </a>
                            <a href={`tel:${SOCIALS.phone}`} rel="noreferrer" className="flex items-center gap-3 text-sm text-foreground/90 transition hover:text-[#28C3EF]">
                                <span className="h-10 w-10 flex items-center justify-center rounded-xl border border-border">
                                    <Phone className="h-4 w-4" />
                                </span>
                                {SOCIALS.phone}
                            </a>
                            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-foreground/90 transition hover:text-[#28C3EF]">
                                <span className="h-10 w-10 flex items-center justify-center rounded-xl border border-border">
                                    <FaLinkedin className="h-4 w-4 hover:text-gradient" />
                                </span>
                                {SOCIALS.linkedin}
                            </a>
                            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-foreground/90 transition hover:text-[#28C3EF]">
                                <span className="h-10 w-10 flex items-center justify-center rounded-xl border border-border">
                                    <FaGithub className="h-4 w-4" />
                                </span>
                                {SOCIALS.github}
                            </a>
                        </div>
                        <a
                            download
                            href="/Adeel_Abbas_Resume_Frontend_Engineer.pdf"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:border-primary/40"
                        >
                            <Download className="h-4 w-4" /> Download Resume
                        </a>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={formik.handleSubmit}
                        className="space-y-4 rounded-3xl glass p-8"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                                    Name
                                </span>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-primary/60"
                                />

                                {formik.touched.name && formik.errors.name && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {formik.errors.name}
                                    </p>
                                )}
                            </label>
                            <label className="block">
                                <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                                    Email
                                </span>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@company.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-primary/60"
                                />

                                {formik.touched.email && formik.errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {formik.errors.email}
                                    </p>
                                )}
                            </label>
                        </div>
                        <label className="block">
                            <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                                Message
                            </span>

                            <textarea
                                rows={5}
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-primary/60"
                            />

                            {formik.touched.message && formik.errors.message && (
                                <p className="mt-1 text-xs text-red-500">
                                    {formik.errors.message}
                                </p>
                            )}
                        </label>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting || isSendingMessage}
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                        >
                            {isSendingMessage ? (
                                <>
                                    <Spinner className="h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
