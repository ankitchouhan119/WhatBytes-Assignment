"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
} from "@/components/ui/chart"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import App from "./Graph"


export function Line_Chart() {
  const percentile = useSelector((state: RootState) => state.score.percentile);

  const data = [
    { percentile: 0, students: 2 },
    { percentile: 25, students: 4 },
    { percentile: 30, students: 3 },
    { percentile: 50, students: 8 },
    { percentile: 75, students: 6 },
    { percentile: 90, students: 5 },
    { percentile: 100, students: 3 },
];

  // Calculate weighted average percentile
  const totalStudents = data.reduce((acc, entry) => acc + entry.students, 0);
  const weightedSum = data.reduce((acc, entry) => acc + entry.percentile * entry.students, 0);
  const averagePercentile = weightedSum / totalStudents;


  return (
    <Card className="w-[22rem] md:w-[30rem]  lg:w-[38rem] mb-10">
      <CardHeader>
        <CardTitle >Comparison Graph</CardTitle>
        <CardDescription className="text-black">
          <p>
            <span className='font-semibold'>
              You scored {percentile}% percentile
            </span>
            {Number(percentile) > Number(averagePercentile)
              ? ' which is higher than the'
              : ' which is lower than the'}
          </p>
          <p>
            average percentile {averagePercentile.toFixed(2)}% of all the engineers who took this assessment.
          </p>
        </CardDescription>

      </CardHeader>
      <span className="w-full flex justify-center items-center">
        <App />
      </span>
    </Card>
  )
}
