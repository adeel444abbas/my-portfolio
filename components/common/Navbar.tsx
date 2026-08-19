import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../utils/constants/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/logo_.png";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = NAV_LINKS.map((l) => l.href.slice(1));
            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const r = el.getBoundingClientRect();
                if (r.top <= 120 && r.bottom >= 120) {
                    setActive(id);
                    break;
                }
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                scrolled ? "py-3" : "py-5",
            )}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
                <div
                    className={cn(
                        "flex w-full items-center justify-between gap-6 rounded-full px-4 py-2 transition-all",
                        scrolled ? "glass" : "bg-transparent",
                    )}
                >
                    <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
                        <Image
                            src={logo}
                            alt={"logo"}
                            loading="lazy"
                            width={180}
                            height={80}
                        />
                    </a>


                    <nav className="hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map((l) => {
                            const isActive = active === l.href.slice(1);
                            return (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className={cn(
                                        "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {l.label}
                                </a>
                            );
                        })}
                    </nav>

                    <a
                        href="#contact"
                        className="hidden rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 md:inline-flex"
                    >
                        Hire Me
                    </a>

                    <button
                        className="md:hidden rounded-full border border-border p-2 text-foreground"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1.5">
                            <span className={cn("block h-0.5 w-5 bg-foreground transition", open && "translate-y-2 rotate-45")} />
                            <span className={cn("block h-0.5 w-5 bg-foreground transition", open && "opacity-0")} />
                            <span className={cn("block h-0.5 w-5 bg-foreground transition", open && "-translate-y-2 -rotate-45")} />
                        </div>
                    </button>
                </div>
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-4 mt-2 rounded-2xl glass p-4 md:hidden"
                >
                    <nav className="flex flex-col gap-1">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
