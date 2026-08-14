import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
    const [pos, setPos] = useState({ x: -400, y: -400 });
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        setEnabled(true);
        const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
            animate={{ background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.10), transparent 40%)` }}
            transition={{ type: "tween", ease: "linear", duration: 0.15 }}
        />
    );
}
