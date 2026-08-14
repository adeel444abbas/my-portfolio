export function BackgroundBlobs() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[120px] animate-blob" />
            <div
                className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[140px] animate-blob"
                style={{ animationDelay: "-5s" }}
            />
            <div
                className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-secondary/15 blur-[130px] animate-blob"
                style={{ animationDelay: "-9s" }}
            />
        </div>
    );
}
