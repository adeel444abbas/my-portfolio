import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/utils/constants/constant";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

export function Projects() {
    return (
        <section id="projects" className="relative py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeader
                    eyebrow="Selected Work"
                    title="Featured projects"
                    description="A few things I've designed and built recently — from analytics tools to AI products."
                />

                <div className="grid gap-8">
                    {PROJECTS.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7 }}
                            className="group grid overflow-hidden rounded-3xl glass lg:grid-cols-2"
                        >
                            <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    width={1280}
                                    height={800}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/20 to-transparent" />
                                {p.featured && (
                                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[11px] font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
                                        <Star className="h-3 w-3" /> Featured
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                                <div>
                                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                                        0{i + 1} — Case Study
                                    </div>
                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
                                    >
                                        Live demo <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2 text-xs font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/40"
                                    >
                                        Source <FaGithub className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
