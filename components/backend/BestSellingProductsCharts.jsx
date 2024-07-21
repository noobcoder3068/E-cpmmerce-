"use client";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsCharts() {
    const data = {
        labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
        datasets: [
            {
                label: "soled",
                data: [50, 10, 20, 20],
                backgroundColor: [
                    "grey", "purple", "yellow", "orange"
                ],
            }
        ]
    };

    return (
        <div className='bg-slate-700 p-8 rounded-lg mt-8'>
            <h2 className='text-xl font-bold text-white'>Best Selling Products Charts</h2>
            <Pie
                data={data}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white',
                            }
                        },
                    }
                }} 
            />
        </div>
    );
}
