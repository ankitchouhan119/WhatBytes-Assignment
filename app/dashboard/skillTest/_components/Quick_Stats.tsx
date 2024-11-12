"use client";

import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store'; 
function Quick_Stats() {
    // Fetching data from Redux store using useSelector
    const rank = useSelector((state: RootState) => state.score.rank);
    const percentile = useSelector((state: RootState) => state.score.percentile);
    const correctAnswers = useSelector((state: RootState) => state.score.correctQuestions);

    return (
        <div className='border-2 p-4 flex w-[22rem] md:w-[30rem]  lg:w-[38rem] rounded-lg items-center gap-2'>
            <div>
                <h2 className='text-sm font-semibold'>
                    Quick Statistics
                </h2>

                <div className='flex gap-3'>
                    
                    <div className=' flex flex-col md:flex-row lg:flex-row justify-center  items-center gap-3 border-r-2 p-4'>
                        <div className='md:block border bg-slate-100 rounded-full p-1'>
                            <Image src={"/trophy.png"}
                                width={30}
                                height={30}
                                alt='trophy icon'
                                className='' />
                        </div>

                        <div className='items-center md:items-start lg:items-start flex flex-col justify-center text-center md:text-start lg:text-start'>
                            <h2 className='font-bold'>{rank}</h2>
                            <p className='text-slate-500 text-xs'>YOUR RANK</p>
                        </div>
                    </div>

                    
                    <div className='flex flex-col md:flex-row lg:flex-row  justify-center items-center gap-3 border-r-2 p-4'>
                        <div className='md:block border bg-slate-100 rounded-full p-1'>
                            <Image src={"/exampad.png"}
                                width={30}
                                height={30}
                                alt='percentile icon'
                                className='' />
                        </div>

                        <div className='items-center md:items-start lg:items-start flex flex-col justify-center text-center md:text-start lg:text-start'>
                            <h2 className='font-bold'>{percentile}%</h2>
                            <p className='text-slate-500 text-xs uppercase'>percentile</p>
                        </div>
                    </div>

                    
                    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3 p-4'>
                        <div className='md:block  border bg-slate-100 rounded-full p-1'>
                            <Image src={"/check.png"}
                                width={30}
                                height={30}
                                alt='correct answers icon'
                                className='' />
                        </div>

                        <div className='items-center md:items-start lg:items-start flex flex-col justify-center text-center md:text-start lg:text-start'>
                            <h2 className='font-bold'>{correctAnswers} / 15</h2>
                            <p className='text-slate-500 text-xs uppercase'>correct answers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quick_Stats;
