import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/utils/constants/constant";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
    return (
        <section id="experience" className="relative py-28">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <SectionHeader
                    eyebrow="Experience"
                    title="A track record of shipping"
                    description="Six years across startups and studios — always at the intersection of design and engineering."
                />

                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2" />

                    <div className="space-y-10">
                        {EXPERIENCES.map((exp, i) => {
                            const left = i % 2 === 0;
                            return (
                                <motion.div
                                    key={exp.role}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6, delay: i * 0.05 }}
                                    className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-10"
                                >
                                    <div className={left ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"}>
                                        <div className="ml-8 rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40 md:ml-0">
                                            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                                                <span>{exp.period}</span>
                                                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                                            </div>
                                            <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                                            <div className="text-sm text-muted-foreground">{exp.company}</div>
                                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                                                {exp.points.map((p) => (
                                                    <li key={p} className="flex gap-2">
                                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                                        <span>{p}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-background md:left-1/2">
                                        <span className="grid h-4 w-4 place-items-center rounded-full bg-[image:var(--gradient-primary)]">
                                            <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
