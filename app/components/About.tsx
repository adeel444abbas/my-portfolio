import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Counter } from "./Counter";
import { STATS } from "../../utils/constants/constant";

export function About() {
    return (
        <section id="about" className="relative py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeader
                    eyebrow="About"
                    title="A developer with taste"
                    description="I build products that feel effortless — combining clean architecture with obsessive design polish."
                />

                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl glass p-8"
                    >
                        <p className="text-lg leading-relaxed text-foreground/90">
                            I'm a Frontend Engineer based in Lahore, Pakistan, with over 3 years of professional experience developing SaaS products, enterprise applications, and MVPs using React.js, Next.js, and TypeScript.
                        </p>
                        <p className="mt-4 leading-relaxed text-foreground/90">
                            I specialize in building responsive, user-focused interfaces, integrating REST APIs, implementing secure authentication systems, and creating scalable frontend architectures. I enjoy writing clean, maintainable code and collaborating with cross-functional teams to deliver production-ready software.
                        </p>
                        <p className="mt-4 leading-relaxed text-foreground/90">
                            Outside of development, I'm passionate about learning new technologies, improving application performance, and exploring modern frontend best practices.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Firebase", "AWS", "Design Systems"].map((t) => (
                                <span key={t} className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl glass p-6"
                            >
                                <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-primary)] opacity-0 blur-2xl transition group-hover:opacity-20" />
                                <div className="text-4xl font-semibold tracking-tight text-gradient">
                                    <Counter to={s.value} suffix={s.suffix} />
                                </div>
                                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
