import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/utils/constants/constant";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
    return (
        <section className="relative py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeader eyebrow="Credentials" title="Certifications" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATIONS.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="flex items-start gap-4 rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40"
                        >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                                <Award className="h-5 w-5" />
                            </span>
                            <div>
                                <div className="font-medium leading-snug">{c.title}</div>
                                <div className="mt-1 text-xs text-muted-foreground">
                                    {c.issuer} · <span className="font-mono">{c.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
