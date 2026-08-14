import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "framer-motion";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const mv = useMotionValue(0);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(mv, to, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setDisplay(Math.round(v)),
        });
        return controls.stop;
    }, [inView, mv, to]);

    return (
        <motion.span ref={ref}>
            {display}
            {suffix}
        </motion.span>
    );
}
