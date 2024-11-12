"use client"

import React, { useEffect } from 'react'
import Update from './_components/Update'
import Quick_Stats from './_components/Quick_Stats'
import Syllabus_analysis from './_components/Syllabus_analysis'
import { Line_Chart } from './_components/Line_chart'
import { RadialGraph } from './_components/Radial_Graph'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store"; 
import { setRank, setPercentile, setCorrectQuestions } from '../../../redux/slice';

function SkillTest() {

    const dispatch = useDispatch();
    const rank = useSelector((state: RootState) => state.score.rank);
    const percentile = useSelector((state: RootState) => state.score.percentile);
    const correctQuestions = useSelector((state: RootState) => state.score.correctQuestions);

    const handleUpdate = () => {
        // Example of dispatching actions to set state
        dispatch(setRank('1'));
        dispatch(setPercentile('85'));
        dispatch(setCorrectQuestions('12'));
    };

    useEffect(() => {
        const fun = () => {
            handleUpdate()
        }
        fun()
    }, [])

    return (
        <div className='flex flex-col'>
            <h2 className='text-md text-slate-600 p-7  text-center md:text-start mt-[8.3em] lg:mt-[5.4rem]'>Skill Test</h2>
            <div className='flex lg:flex-row flex-col justify-around mx-6 items-center   '>
                <div className='px-7 flex flex-col items-center  gap-5 w-full'>

                    <Update />
                    <Quick_Stats />
                    <Line_Chart />
                </div>

                <div className='px-7 flex flex-col items-center gap-5 w-full'>
                    <Syllabus_analysis />
                    <RadialGraph />

                </div>
            </div>

        </div>
    )
}

export default SkillTest
