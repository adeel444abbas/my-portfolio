import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loading() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setShow(false), 900);
        return () => clearTimeout(t);
    }, []);
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="relative h-14 w-14">
                            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent animate-spin" />
                        </div>
                        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                            LOADING
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
