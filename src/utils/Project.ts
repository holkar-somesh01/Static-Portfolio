import { Project } from "../types";
import VyaparHome from '../assets/Projects/VyaparAppHomepage.jpg'
import HRMS from '../assets/Projects/Human-Resource.jpg'

export const projects: Project[] = [
    {
        id: '1',
        title: 'Vyapar App Clone',
        description: 'A full-stack business management application for small businesses and retailers. Features include real-time inventory tracking, customer billing, invoice generation, expense management, and report analytics.',
        stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
        image: VyaparHome,
        category: 'MERN',
        githubLink: 'https://github.com/holkar-somesh01/Quick-Billing-App-Frontend',
        liveLink: 'https://quick-billing-application.onrender.com/',
        Repo: true,
        newCategory: "Personal",
    },
    {
        id: '2',
        title: 'Human Resource Management System',
        description: 'A full-stack HRM web application designed to manage employee data, attendance, leave requests, payroll, and departmental structure. Admins can monitor HR activities in real-time with secure role-based access.',
        stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
        image: HRMS,
        category: 'MERN',
        githubLink: 'https://github.com/holkar-somesh01/Human-Resource-Management-Frontend',
        liveLink: "https://human-resource-management-system-xjin.onrender.com/",
        Repo: true,
        newCategory: "Personal",
    },
    {
        id: '3',
        title: 'Jay bhadra Construction Website',
        description: 'A modern, responsive company website developed for Jaybhadra Construction to showcase their ongoing and completed infrastructure projects. Features include project galleries, service listings, contact forms, and client testimonials.',
        stack: ['React.js', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2089&q=80',
        category: 'Static',
        githubLink: 'https://github.com/someshwarholkar/jaybhadra-construction',
        liveLink: "https://jay-bhadra-construction.vercel.app/",
        Repo: false,
        newCategory: "Client",
    }

];