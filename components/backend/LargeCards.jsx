import React from 'react';
import LargeCard from './LargeCard';

export default function LargeCards() {
  const orderState=[{
    period: "Today Orders",
    sales: 11,
    color: "bg-green-600"
  },
  {
    period: "Yesterday Orders",
    sales: 110,
    color: "bg-blue-700"
  },
  {
    period: "This Month",
    sales: 2341,
    color: "bg-red-600"
  },
  {
    period: "All-Time Sales",
    sales: 43111,
    color: "bg-purple-700"
  },
  
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {orderState.map((item,i)=>{
          return(
            <LargeCard item={item} key={i}/>
          )
        })}
    </div>
  )
}
