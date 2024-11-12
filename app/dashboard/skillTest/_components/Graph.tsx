import { RootState } from "@/redux/store"
import React from "react";
import { useSelector } from "react-redux";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";

export default function App() {

    const data = [
        { percentile: 0, students: 2 },
        { percentile: 25, students: 4 },
        { percentile: 30, students: 3 },
        { percentile: 50, students: 8 },
        { percentile: 75, students: 6 },
        { percentile: 90, students: 5 },
        { percentile: 100, students: 3 },
    ];

    const userPercentile = useSelector((state: RootState) => state.score.percentile);;

    // Find the closest data point to userPercentile for the y-axis value (interpolated)
    const interpolateValue = (data: any, userPercentile: any) => {
        let lowerPoint = null;
        let upperPoint = null;

        for (let i = 0; i < data.length - 1; i++) {
            if (data[i].percentile <= userPercentile && data[i + 1].percentile >= userPercentile) {
                lowerPoint = data[i];
                upperPoint = data[i + 1];
                break;
            }
        }

        if (lowerPoint && upperPoint) {
            const slope = (upperPoint.students - lowerPoint.students) / (upperPoint.percentile - lowerPoint.percentile);
            const interpolatedValue = lowerPoint.students + slope * (userPercentile - lowerPoint.percentile);
            return interpolatedValue;
        }

        return null;
    };

    // Get interpolated value for user's percentile
    const userPointValue = interpolateValue(data, userPercentile);

    // Add user point to data array
    const modifiedData = userPointValue !== null ? [...data, { percentile: userPercentile, students: userPointValue }] : data;

    // Sort the data by percentile in ascending order
    const sortedData = modifiedData.sort((a, b) => Number(a.percentile) - Number(b.percentile));
    return (
        <ResponsiveContainer width={"95%"} height={300}>
            <LineChart data={sortedData} className="p-4">
                <XAxis dataKey="percentile" type="number" domain={[0, 100]} />
                <Tooltip formatter={(value) => [`NumberOfStudents: ${Math.round(Number(value))}`]} />


                <Line className=""
                    type="monotone"
                    dataKey="students"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                />
              
                <ReferenceLine
                    x={userPercentile}
                    stroke="grey"
                    label={{
                        position: "inside",
                        value: `Your Percentile`,
                        fill: "grey",
                        fontSize: 16,

                    }}
                />


            </LineChart>
        </ResponsiveContainer>
    );
}
