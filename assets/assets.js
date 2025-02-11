import hand_icon from './hand-icon.png';
import { Briefcase, Code, Globe, GraduationCap, Images, Layers, Smartphone } from 'lucide-react';

export const assets = {
    Briefcase, Code, GraduationCap,
    hand_icon,
};

export const workData = [
    {
        title: 'Web project',
        description: 'Web Development',
        bgImage: '/work-1.png',
        link: 'https://clothing-frontend-omega.vercel.app'
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: Globe, title: 'Web app development', description: 'Crafting innovative, responsive web solutions for impactful and seamless user experiences.' },
    { icon: Smartphone, title: 'Mobile app development', description: 'Developing seamless, innovative mobile app solutions that engage and delight users.' },
    { icon: Layers, title: 'UI/UX design', description: 'Designing intuitive, user-friendly UI/UX experiences that captivate and engage users.' },
    { icon: Images, title: 'Graphic design', description: 'Creating visually compelling graphic designs that captivate and communicate effectively.' },
]

export const infoList = [
    { icon: Code, title: 'Technology', description: 'HTML, CSS, JavaScript, React Js, Next Js, MongoDB, Express Js, React Native' },
    { icon: GraduationCap, title: 'Education', description: 'BS in Software Engineering from Virtual University of Pakistan' },
    { icon: Briefcase, title: 'Projects', description: 'Built more than 5 projects' }
];
