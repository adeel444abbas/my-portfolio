import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SOCIALS } from "@/utils/constants/constant";

export function Footer() {
    return (
        <footer className="relative border-t border-border py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">A</span>
                    <span>© {new Date().getFullYear()} Adeel Abbas. Crafted with care.</span>
                </div>
                <div className="flex items-center gap-2">
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
                            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/[0.03] text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
