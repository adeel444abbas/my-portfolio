import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profile from "@/public/profile.jpeg";
import { MagneticButton } from "./MagneticButton";
import { SOCIALS } from "@/utils/constants/constant";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center pt-32 pb-24">
            <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col justify-center">
                    <motion.span
                        variants={item}
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                    >
                        <Sparkles className="h-3 w-3 text-gradient" color="#30A7F2" /> Available for new work
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        <span className="text-4xl text-gradient">Hi, </span> <br />
                        I'm  <span className="">Adeel Abbas</span>
                        <br />
                        <span className="text-gradient text-3xl sm:text-4xl lg:text-5xl">
                            <TypeAnimation
                                sequence={[
                                    "Frontend Engineer",
                                    2000,
                                    "React.js Developer",
                                    2000,
                                    "Next.js Developer",
                                    2000,
                                    "TypeScript Developer",
                                    2000,
                                    "Building Modern Web Apps",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        I build scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies. With 3+ years of professional experience, I enjoy transforming complex ideas into intuitive digital experiences that users love.
                    </motion.p>

                    <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
                        <MagneticButton href="#projects">
                            View my work <ArrowDown className="h-4 w-4" />
                        </MagneticButton>
                        <MagneticButton href="#contact" variant="ghost">
                            Get in touch
                        </MagneticButton>
                    </motion.div>

                    <motion.div variants={item} className="mt-10 flex items-center gap-3">
                        {[
                            { href: SOCIALS.github, icon: FaGithub, label: "GitHub" },
                            { href: SOCIALS.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                            { href: `mailto:${SOCIALS.email}`, icon: Mail, label: "Email" },
                        ].map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.03] text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
                    <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-border glass shadow-[var(--shadow-soft)]">
                        <Image
                            src={profile}
                            alt="Alex Carter portrait"
                            fill
                            className="object-cover object-[center_10%] scale-100 transition duration-500 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3 text-xs"
                        >
                            <div>
                                <div className="font-mono uppercase tracking-widest text-muted-foreground">Currently</div>
                                <div className="mt-0.5 text-foreground">Building at Nodlays</div>
                            </div>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[image:var(--gradient-primary)] opacity-70" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[image:var(--gradient-primary)]" />
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
