"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRank, setPercentile, setCorrectQuestions } from '../../../../redux/slice';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

function Update() {
    const dispatch = useDispatch();

    const [rankInput, setRankInput] = useState("1");
    const [percentileInput, setPercentileInput] = useState("85");
    const [correctQuestionsInput, setCurrentScoreInput] = useState("12");

    const { rank, percentile, correctQuestions } = useSelector((state:any) => state.score);

    // Validation state
    const [rankError, setRankError] = useState("");
    const [percentileError, setPercentileError] = useState("");
    const [correctQuestionsError, setCorrectQuestionsError] = useState("");

    const validateRank = (value: any) => {
        if (!value) {
            setRankError("Required | should be a number");
        } else if (isNaN(Number(value))) {
            setRankError("Should be a number");
        } else {
            setRankError("");
        }
    };

    const validatePercentile = (value: any) => {
        if (!value) {
            setPercentileError("Required | should be 0 - 100");
        } else if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 100) {
            setPercentileError("Number | should be 0 - 100");
        } else {
            setPercentileError("");
        }
    };

    const validateCorrectQuestions = (value: any) => {
        if (!value) {
            setCorrectQuestionsError("Required | should be 0 - 15");
        } else if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 15) {
            setCorrectQuestionsError("Number | should be 0 - 15");
        } else {
            setCorrectQuestionsError("");
        }
    };

    const handleSave = () => {
        // Basic save logic can remain
        if (!rankError && !percentileError && !correctQuestionsError) {
            dispatch(setRank(rankInput));
            dispatch(setPercentile(percentileInput));
            dispatch(setCorrectQuestions(correctQuestionsInput));
            setOpen(false); // Close the dialog if no errors
        }
    };

    const [open, setOpen] = useState(false);

    return (
        <div className='border-2 w-[22rem] md:w-[30rem]  lg:w-[38rem] p-4 mr-3 flex  rounded-lg items-center gap-2 justify-between'>
            <div className='flex items-center'>
                <Image src={"/html.png"} width={60} height={50} alt='logo' className='' />
                <div>
                    <h2 className='text-sm lg:text-sm font-semibold'>
                        Hyper Text Markup Language
                    </h2>
                    <p className='text-slate-600 text-xs md:text-sm'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
            </div>
            <button className='border px-6 py-2 text-xs h-fit bg-blue-800 text-white rounded-lg' onClick={() => setOpen(true)}>Update</button>

            <Dialog open={open}>
                <DialogContent className=''>
                    <DialogHeader className='flex flex-col gap-5'>
                        <DialogTitle>
                            <span className='flex lg:justify-between justify-between gap-4 items-center'>
                                <span>Update scores</span>
                                <Image src={"/html.png"} width={60} height={50} alt='logo' className='' />
                            </span>
                        </DialogTitle>
                        <DialogDescription className='flex flex-col gap-5 text-sm'>
                            <span className='flex md:flex-row lg:flex-row justify-between items-center mb-4'>
                                <span className='flex gap-3 justify-center items-center'>
                                    <span className='rounded-full bg-blue-700 text-white hidden lg:w-6 md:w-6 lg:h-6 md:h-6 pt-1 text-center'>1</span>
                                    <span className='text-black'>Update your <span className='font-semibold'>Rank</span></span>
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        required
                                        className={`border p-2 rounded-lg ${rankError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-blue-600'}  focus:outline-none focus:outline-offset-0`}
                                        placeholder='Rank'
                                        value={rankInput}
                                        onChange={(e) => {
                                            setRankInput(e.target.value);
                                            validateRank(e.target.value);
                                        }}
                                    />
                                    {rankError && <span className='text-red-500 text-xs block pt-1'>{rankError}</span>}

                                </span>
                            </span>

                            <span className='flex md:flex-row lg:flex-row justify-between items-center mb-4'>
                                <span className='flex gap-3 justify-center items-center'>
                                    <span className='rounded-full bg-blue-700 text-white hidden lg:w-6 md:w-6 lg:h-6 md:h-6 pt-1 text-center'>2</span>
                                    <span className='text-black'>Update your <span className='font-semibold'>Percentile</span></span>
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        required
                                        className={`border p-2 rounded-lg ${percentileError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-blue-600'}  focus:outline-none focus:outline-offset-0`}
                                        placeholder='Percentile'
                                        value={percentileInput}
                                        onChange={(e) => {
                                            setPercentileInput(e.target.value);
                                            validatePercentile(e.target.value);
                                        }}
                                    />
                                    {percentileError && <span className='text-red-500 text-xs block pt-1'>{percentileError}</span>}
                                </span>
                            </span>

                            <span className='flex md:flex-row lg:flex-row justify-between items-center mb-4'>
                                <span className='flex gap-3 justify-center items-center'>
                                    <span className='rounded-full bg-blue-700 text-white hidden lg:w-6 md:w-6 lg:h-6 md:h-6 pt-1 text-center'>3</span>
                                    <span className='text-black'>Update your <span className='font-semibold'>Current Score (out of 15)</span></span>
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        required
                                        className={`border p-2 rounded-lg ${correctQuestionsError ? 'border-red-500 focus:border-red-500' : 'border-blue-500 focus:border-blue-600'}  focus:outline-none focus:outline-offset-0`}
                                        placeholder='Current Score'
                                        value={correctQuestionsInput}
                                        onChange={(e) => {
                                            setCurrentScoreInput(e.target.value);
                                            validateCorrectQuestions(e.target.value);
                                        }}
                                    />
                                    {correctQuestionsError && <span className='text-red-500 text-xs block pt-1'>{correctQuestionsError}</span>}
                                </span>
                            </span>

                            <span className='w-full md:flex-row lg:flex-row flex gap-6 justify-end items-end'>
                                <button className='border-blue-800 border px-4 py-3 h-fit text-blue-800 rounded-lg hover:text-blue-1000 hover:border-blue-1000' onClick={() => setOpen(false)}>Cancel</button>
                                <button
                                    className='border px-7 py-3 h-fit gap-2 justify-center items-center bg-blue-800 text-white rounded-lg text-sm flex hover:bg-blue-500'
                                    onClick={handleSave}
                                >
                                    <span className='text-sm'>Save</span>
                                    <ArrowRight className='w-4 h-4' />
                                </button>
                            </span>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Update;
