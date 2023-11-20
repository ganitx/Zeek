"use client"

import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';
import Image from 'next/image';

type IProjectDetails = {
    title?: string;
    about?: string;
    img?: string;
    tech?: string[];
};

type ILink = {
    link: string;
};

export default function ProjectSection({ projectDetails, link }: { projectDetails: IProjectDetails, link: ILink  }) {
    return (
        <Link className='flex justify-center w-[70%]' href={link.link}>
            <div className='flex flex-col justify-center items-center bg-zinc-900 w-full h-auto rounded-md'>
                <div className='relative flex flex-row justify-center w-full h-fit overflow-hidden rounded-tr-md rounded-tl-md'>
                    <div className='flex transition-transform ease-in-out duration-300'>
                        <img className='w-full h-auto' src={`${projectDetails.img}.PNG`} alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 w-full h-auto p-7'>
                    <div className='flex flex-col w-full md:w-1/2 gap-10'>
                        <h1 className='text-2xl pb-2 font-bold'>{projectDetails.title}</h1>
                        <p className='text-stone-500 font-serif md:text-lg'>{projectDetails.about}</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <h1 className='text-teal-400 text-sm md:text-xl font-bold p-3'>Stack used</h1>
                        <div className='flex flex-wrap gap-2'>
                            {projectDetails.tech?.map((item: string, idx: number) => (
                                <span key={idx} className='w-auto bg-neutral-800 rounded-md p-1'>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}