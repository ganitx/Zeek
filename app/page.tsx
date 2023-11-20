
"use client"

import AnimateCol from '@/components/intro/animateCol';
import IntroSection from '@/components/intro/introSection';
import NavBar from '@/components/nav/navBar';
import ProjectSection from '@/components/projects/projectSection';
import React from 'react';

export default function page(): React.JSX.Element {
    const chessGame = {
        title: "Chess Game",
        about: "A fully-functional chess game with real-time updates, multiplayer support for registered users, rankings, filtering, and AI engine opponents.",
        img: "/chess-1",
        tech: [
            "React", "Redux", "ExpressJs", "Javascript",
            "MongoDB", "Mongoose", "Typescript", "NodeJs",
            "JWT", "Socket.Io", "SCSS",
        ],
    };

    const Ecommerce = {
        title: "E-commerce",
        about: "The E-commerce web application is a full-stack solution that provides a user-friendly interface, supports data filtering, and integrates with Stripe API gateway.",
        img: "/ecommerce-1",
        tech: [
            "Strip", "SQL", "PostgreSQL", "React",
            "ExpressJs", "NodeJs", "SCSS", "Typescript",
        ],
    };

    const Notepad = {
        title: "Notepad",
        about: "The Note pad application is a full-stack application that supports the REST API and CRUD implementation, integrated with MongoDB. The app also supports labels, reminders, filter search, offline mode, and dark mode features.",
        img: "notepad-1",
        tech: [
            "React", "CSS", "NodeJs", "ExpressJs",
            "MongoDB", "Mongoose",
        ],
    };

    const links = {
        chess: { link: 'https://chessgame-ghanem10.vercel.app/' },
        ecommerce: { link: 'https://paw-e-commerce.vercel.app/' },
        notepad: { link: 'https://task-manager-ghanem10.vercel.app/' },
    };

    return (
        <React.Fragment>
            <AnimateCol />
            <section id='#intro' className='flex flex-col w-full h-screen'>
                <NavBar />
                <IntroSection />
            </section>
            <section className='flex flex-col justify-center items-center gap-10 w-full h-auto pb-12'>
                <ProjectSection link={links.chess} projectDetails={chessGame} />               
                <ProjectSection link={links.notepad} projectDetails={Notepad} />               
                <ProjectSection link={links.ecommerce} projectDetails={Ecommerce} />               
            </section>
        </React.Fragment>
    );
}