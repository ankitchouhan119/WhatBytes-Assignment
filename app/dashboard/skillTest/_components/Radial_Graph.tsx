"use client"

import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';  

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import Image from "next/image" 



export function RadialGraph() {
    const correctQuestions = useSelector((state: RootState) => state.score.correctQuestions);
    const calculateAngle = (value:any) => {
    // Linear mapping from 1-15 to 0-360 degrees
    return (-(value - 1) * 360) / (15 - 1);
};
    const chartData = [
        { browser: "safari", visitors:1500 , fill: "blue" },
    ]
    
    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-3))",
        },
    } satisfies ChartConfig
    return (
        <Card className="flex flex-col mb-2 w-[22rem] md:w-[30rem]  ">
            <CardHeader className="items-center pb-0">
                <CardTitle className="w-full">
                    <div className='flex w-full justify-between items-center'>
                        <h2 className="text-sm font-semibold">Question Analysis</h2>
                        <h2 className='text-sm font-semibold text-blue-500'>{correctQuestions}/15</h2>
                    </div>
                </CardTitle>
                <CardDescription className="text-black">
                    <p>
                        <span className='font-semibold text-sm'>
                            You scored {correctQuestions} questions correct out of 15.
                        </span> However it still needs some improvements.
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                    className="-rotate-90"
                        data={chartData}
                        startAngle={0}
                        endAngle={calculateAngle(correctQuestions)}
                        innerRadius={80}
                        outerRadius={140}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[86, 74]}
                        />
                        <RadialBar dataKey="visitors" background />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <foreignObject
                                                x={Number(viewBox.cx) - 40}
                                                y={Number(viewBox.cy) - 40}
                                                width="80"
                                                height="80"
                                            >
                                                <div className='rotate-90  rounded-full p-1'>
                                                    <Image
                                                        src={"/target.png"}
                                                        width={150}
                                                        height={150}
                                                        alt='logo'
                                                    />
                                                </div>
                                            </foreignObject>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
