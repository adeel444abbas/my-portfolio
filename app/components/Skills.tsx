import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILL_CATEGORIES } from "@/utils/constants/constant";
import { SectionHeader } from "./SectionHeader";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <div ref={ref}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-foreground/80">{name}</span>
                <span className="font-mono text-muted-foreground">{level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.2, ease: "easeOut", delay }}
                    className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="relative py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeader
                    eyebrow="Skills"
                    title="Tools of the craft"
                    description="A modern, focused stack I've deepened over years of production work."
                />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILL_CATEGORIES.map((cat, i) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: i * 0.06 }}
                                className="group relative rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40"
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {cat.skills.map((s, j) => (
                                        <SkillBar key={s.name} name={s.name} level={s.level} delay={j * 0.06} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
