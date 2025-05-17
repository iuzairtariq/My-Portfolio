import hand_icon from './hand-icon.png';
import { Briefcase, Code, Globe, GraduationCap, BrainCircuit, Layers, Smartphone } from 'lucide-react';

export const assets = {
    Briefcase, Code, GraduationCap,
    hand_icon,
};

export const workData = [
    {
        title: 'Web Project',
        description: 'E-Commerce (live)',
        bgImage: '/work-3.png',
        link: 'https://clothing-ecommerce-orcin.vercel.app'
    },
    {
        title: 'Geo Based App',
        description: 'coming soon',
        bgImage: '/work-2.png',
    },
    {
        title: 'AI-Powered App',
        description: 'Finance Manager (live)',
        bgImage: '/work-1.png',
        link: 'https://wealth-puce.vercel.app'
    },
    {
        title: 'AI-Powered Tool',
        description: 'coming soon',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: Globe, title: 'Web App Development', description: 'Crafting innovative, responsive web solutions for impactful and seamless user experiences.' },
    { icon: Layers, title: 'UI/UX Design', description: 'Designing intuitive, user-friendly UI/UX experiences that captivate and engage users.' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Developing seamless, innovative mobile app solutions that engage and delight users. (in progress...)' },
    { icon: BrainCircuit, title: 'AI Integrated Projects', description: 'AI-powered designs that blend technology and creativity for impactful results. (in progress...)' },
]

export const infoList = [
    { icon: Code, title: 'Technology', description: 'JavaScript, ReactJs, NextJs, MongoDB, PostgreSQL, Express Js, Node Js' },
    { icon: GraduationCap, title: 'Education', description: 'BS in Software Engineering from Virtual University of Pakistan' },
    { icon: Briefcase, title: 'Projects', description: 'Built more than 5 projects' }
];
