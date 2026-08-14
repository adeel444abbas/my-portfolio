import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/utils/constants/constant";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
    return (
        <section className="relative py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeader eyebrow="Kind words" title="What people say" />
                <div className="grid gap-5 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className="relative rounded-2xl glass p-6"
                        >
                            <Quote className="h-6 w-6 text-primary/60" />
                            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                            <figcaption className="mt-5 border-t border-border pt-4">
                                <div className="text-sm font-medium">{t.name}</div>
                                <div className="text-xs text-muted-foreground">{t.role}</div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
