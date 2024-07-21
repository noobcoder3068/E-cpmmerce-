import React from 'react'

export default function WeeklySalesCharts() {
  return (
    <div className='bg-slate-700 p-8 rounded-lg mt-8'>
        <h2 className='text-white text-xl font-bold'>Weekly Charts</h2>

        

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap ">
        <li className="me-2">
            <button href="#" classNames="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Orders</button>
        </li>
        <li className="me-2">
            <button href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Sales</button>
        </li>
    </ul>
</div>

    </div>
  )
}
