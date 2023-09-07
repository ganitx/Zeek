import React from 'react';
import { attachments } from '@/lib/getItemsInfo';

export default function MainPage() {

    const switcher = (num: number | undefined) => {
        if (!(num === undefined) && num === 0) {
            return "bg-red-700"; 
        }
    };

    const WeaponseContent: React.JSX.Element = (
        <section>
            <div 
                className='bg-zinc-900 flex justify-between
                w-8/12 h-auto p-4'
            >
                {attachments.map((items: Weaponse) => (
                    <div 
                        key={items.id}
                        className={`${switcher(items.id)} w-1/2 p-3
                        leading-9`}
                    >
                        <div>{items.Name}</div>
                    </div>
                ))}
            </div>
        </section>
    );

    return WeaponseContent;
}