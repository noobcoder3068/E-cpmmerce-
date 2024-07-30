"use client";
import React,{useState} from 'react';
import data from '../../public/data.json';

export default function CustomData() {
    const page_size= 10;
    const total_pages = Math.ceil(data.length / page_size);
    const [currentPage, setCurrentPage]= useState(1);
    const startIndex= (currentPage-1) * page_size;
    const endIndex= startIndex + page_size;
    const displyingData= data.slice(startIndex,endIndex);
    const startItemIndex= startIndex+1;
    const endItemIndex= Math.min(startIndex+page_size, data.length);

    return (
    <div className='bg-slate-50 dark:bg-slate-700 shadow-lg p-8 mt-8 rounded-lg'>
      <h2 className='font-bold text-xl '>CustomTable</h2>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm mt-2 text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First_Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last_Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {displyingData.map((item,i)=>{
                return(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                <td className="px-6 py-4">{item.id}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.firstName}
                </th>
                <td className="px-6 py-4">{item.lastName}</td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.email}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
<nav
  className="flex items-center flex-wrap justify-between pt-4 z-0"
  aria-label="Table navigation"
>
  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
    Showing <span className="font-semibold text-gray-900 dark:text-white">
      {startItemIndex}-{endItemIndex}
    </span> of{' '}
    <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span>
  </span>
  <ul className="flex space-x-2 text-sm h-8">
    <li>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </button>
    </li>
    {Array.from({ length: total_pages }, (_, index) => (
      <li key={index}>
        <button
          onClick={() => setCurrentPage(index + 1)}
          className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
        >
          {index + 1}
        </button>
      </li>
    ))}
    <li>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === total_pages}
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </li>
  </ul>
</nav>

        </div>
      </div>
    </div>
  );
}
  
