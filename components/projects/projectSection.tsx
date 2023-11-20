"use client"

import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';

type IProjectDetails = {
    title?: string;
    about?: string;
    img?: string[];
    tech?: string[];
};

type ILink = {
    link: string;
};

export default function ProjectSection({ projectDetails, link }: { projectDetails: IProjectDetails, link: ILink  }) {
    const [idx, setIdx] = useState<number>(0);

    const moveForward = () => {
        if (idx >= 3) {
            setIdx(pre => pre - 3);
        } else {
            setIdx(pre => pre + 1);
        }
    };

    const moveBackward = () => {
        if (idx <= 0) {
            setIdx(pre => pre + 3);
        } else {
            setIdx(pre => pre - 1);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center bg-zinc-900 w-[800px] h-auto rounded-md'>
            <div className='relative flex flex-row justify-center w-full h-fit overflow-hidden rounded-tr-md rounded-tl-md'>
                <button onClick={moveBackward} className='absolute top-44 left-6 bg-neutral-600 hover:opacity-20 rounded-full opacity-[0.3] z-10 p-3'>
                    <Icon.ArrowLeft className='text-white' />
                </button>
                <div className={`flex transition-transform ease-in-out duration-300`} style={{ transform: ` translateX(-${idx * 100}%)`}}>
                    {projectDetails.img?.map((img: string, i: number) => (
                        <img key={i} className='w-full h-96' src={`${img}.PNG`} alt="" />
                    ))}
                </div>
                <button onClick={moveForward} className='absolute top-44 right-6 bg-neutral-600 hover:opacity-20 rounded-full opacity-[0.3] z-10 p-3'>
                    <Icon.ArrowRight className='text-white' />
                </button>
            </div>
            <Link href={link.link} >
                <div className='flex flex-row gap-10 w-full h-auto p-7'>
                    <div className='flex flex-col w-2/3 gap-10'>
                        <h1 className='text-2xl pb-2 font-bold'>{projectDetails.title}</h1>
                        <p className='text-stone-500 font-serif text-lg'>{projectDetails.about}</p>
                    </div>
                    <div className='w-1/3'>
                        <h1 className='text-teal-400 text-xl font-bold p-3'>Stack used</h1>
                        <div className='flex flex-wrap gap-2'>
                            {projectDetails.tech?.map((item: string, idx: number) => (
                                <span key={idx} className='w-auto bg-neutral-800 rounded-md p-1'>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}