import React from 'react';

export default function AnimateCol(): React.JSX.Element {
    return (
        <React.Fragment>
            <div className='absolute w-20 h-full transform translate-x-56 left-[40%] bg-cyan-300 blur-sm -z-10'></div>
            <div className='absolute w-20 h-full transform translate-x-56 right-96 bg-cyan-300 blur-sm -z-10'></div>
        </React.Fragment>
    );
}