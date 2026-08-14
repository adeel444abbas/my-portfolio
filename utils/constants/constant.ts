import {
    Code2,
    Database,
    Cloud,
    Wrench,
    Server,
    Palette,
    ShieldUser,
} from "lucide-react";

import project1 from "@/public/project-1.jpg";
import project2 from "@/public/project-2.jpg";
import project3 from "@/public/project-3.jpg";

export const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const STATS = [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 10, suffix: "+", label: "Projects Shipped" },
    { value: 8, suffix: "+", label: "Happy Clients" },
    { value: 12, suffix: "", label: "Open Source Repos" },
];

export const SKILL_CATEGORIES = [
    {
        icon: Palette,
        title: "Frontend",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 92 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 94 },
            { name: "Framer Motion", level: 85 },
        ],
    },
    {
        icon: Server,
        title: "Backend & APIs",
        skills: [
            { name: "REST APIs", level: 90 },
            { name: "Node.js", level: 70 },
            { name: "Express", level: 70 },
            { name: "MongoDB", level: 60 },
            { name: "Firebase", level: 60 },
        ],
    },
    {
        icon: Cloud,
        title: "Cloud",
        skills: [
            { name: "AWS", level: 78 },
            { name: "Vercel", level: 92 },
            { name: "Convex", level: 80 },
        ],
    },
    {
        icon: Wrench,
        title: "Tools",
        skills: [
            { name: "GitHub", level: 92 },
            { name: "GitLab", level: 78 },
            { name: "Bitbucket", level: 78 },
            { name: "Jira", level: 88 },
            { name: "Postman", level: 80 },
        ],
    },
    {
        icon: ShieldUser,
        title: "Authentication",
        skills: [
            { name: "JWT Authentication", level: 90 },
            { name: "Clerk Authentication", level: 94 },
            { name: "RBAC", level: 80 },
        ],
    },
    {
        icon: Code2,
        title: "Languages",
        skills: [
            { name: "TypeScript", level: 90 },
            { name: "JavaScript", level: 94 },
        ],
    },
];

export const EXPERIENCES = [
    {
        role: "Frontend Engineer",
        company: "Nodlays Pvt Ltd.",
        period: "June 2024 — Present",
        location: "Lahore, PK",
        points: [
            "Developed and maintained large-scale SaaS applications",
            "Built reusable UI component libraries",
            "Integrated REST APIs",
            "Implemented JWT Authentication & RBAC",
            "Integrated AWS S3 document workflows"
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "SeeBiz Pvt Ltd.",
        period: "2022 — 2023",
        location: "Lahore, PK",
        points: [
            "Developed responsive and reusable frontend components using React.js, HTML5, CSS3, and JavaScript (ES6+).",
            "Built and integrated RESTful APIs with Node.js and Express.js, enabling seamless frontend-backend communication.",
            "Collaborated on full-stack MERN applications, focusing on API integration, debugging, and performance optimization.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "AwardGenie",
        description:
            "An AI-powered MVP that streamlines award application workflows through intelligent profile generation and automation.",
        image: project1,
        tags: ["React.js", "Redux Toolkit", "Clerk", "Tailwind CSS", "ShadCN UI"],
        live: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Muster360",
        description:
            "An enterprise platform for workflow management, document generation, diagram creation, multilingual support, and secure business operations.",
        image: project2,
        tags: ["React.js", "Redux Toolkit", "React Konva", "React PDF", "Tailwind CSS", "Radix UI"],
        live: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Lumen Chat",
        description:
            "AI chat product with streaming responses, tool calls, and a beautifully polished glassmorphism UI.",
        image: project3,
        tags: ["Next.js", "OpenAI", "Edge", "Tailwind"],
        live: "#",
        github: "#",
        featured: false,
    },
];

export const CERTIFICATIONS = [
    { title: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2024" },
    { title: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2023" },
    { title: "Advanced React Patterns", issuer: "Epic React by Kent C. Dodds", year: "2022" },
];

export const TESTIMONIALS = [
    {
        quote:
            "Alex ships work that feels considered — fast, accessible, and beautiful. One of the best engineers I've worked with.",
        name: "Sara Lindqvist",
        role: "VP Engineering, Northwind",
    },
    {
        quote:
            "Rare mix of design sensibility and deep technical craft. Our product looks and performs better because of him.",
        name: "Miguel Torres",
        role: "Product Lead, Lumen Studio",
    },
    {
        quote:
            "He turned a messy legacy codebase into something the whole team is proud of. Exceptional partner.",
        name: "Jules Wei",
        role: "CTO, Pixelforge",
    },
];

export const SOCIALS = {
    github: "https://github.com/adeel444abbas",
    linkedin: "https://www.linkedin.com/in/adeel-abbas-761958185",
    twitter: "https://twitter.com",
    email: "adeel444abbas@gmail.com",
    phone: "+92353516476"
};