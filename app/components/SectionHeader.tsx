import { motion } from "framer-motion";

export function SectionHeader({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-16 max-w-2xl text-center"
        >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-[image:var(--gradient-primary)]" /> {eyebrow}
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
        </motion.div>
    );
}
