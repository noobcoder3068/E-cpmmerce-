"use client";
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function WeeklySalesCharts() {
    const [displayChart, setDisplayChart] = useState('sales');

    const salesData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Sales',
                data: [120, 150, 180, 220, 200, 170, 190],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true,
            },
        ],
    };

    const ordersData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Orders',
                data: [30, 40, 35, 50, 45, 55, 60],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                fill: true,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            tooltip: {
                bodyColor: 'white' 
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' 
                }
            },
            y: {
                ticks: {
                    color: 'white' 
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' 
                }
            }
        }
    };

    return (
        <div className='bg-slate-700 p-8 rounded-lg mt-8'>
            <h2 className='text-white text-xl font-bold'>Weekly Charts</h2>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap">
                    <li className="mr-2">
                        <button 
                            onClick={() => setDisplayChart('orders')}
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${displayChart === 'orders' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        >
                            Orders
                        </button>
                    </li>
                    <li className="mr-2">
                        <button 
                            onClick={() => setDisplayChart('sales')}
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${displayChart === 'sales' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        >
                            Sales
                        </button>
                    </li>
                </ul>
            </div>

            <div className='mt-4 '>
                {displayChart === 'sales' && (
                    <Line data={salesData} options={options} />
                )}

                {displayChart === 'orders' && (
                    <Line data={ordersData} options={options} />
                )}
            </div>
        </div>
    );
}
