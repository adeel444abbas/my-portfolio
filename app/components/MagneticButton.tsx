import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "ghost";
}

export function MagneticButton({ children, className, href, onClick, variant = "primary" }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });

    const onMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
    };
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    const base =
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
    const styles =
        variant === "primary"
            ? "text-primary-foreground shadow-[var(--shadow-glow)] bg-[image:var(--gradient-primary)] hover:opacity-95"
            : "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.06]";

    const Inner = (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className="inline-block"
        >
            <span className={cn(base, styles, className)}>{children}</span>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {Inner}
            </a>
        );
    }
    return (
        <button type="button" onClick={onClick}>
            {Inner}
        </button>
    );
}
