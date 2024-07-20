import React from 'react';
import SmallCard from './SmallCard';
import { ShoppingCart } from 'lucide-react';
import { CheckCheck } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import { Loader2 } from 'lucide-react';

export default function SmallCards() {
  const orderState=[{
    status: "Today Order",
    number: 500,
    color: "bg-orange-600",
    icon: ShoppingCart
  },
  {
    status: "Order Pending",
    number: 100,
    color: "bg-yellow-500",
    icon: Loader2
  },
  {
    status: "Order Processing",
    number: 300,
    color: "bg-red-600",
    icon: RefreshCcw
  },
  {
    status: "Order Deliverd",
    number: 200,
    color: "bg-purple-700",
    icon: CheckCheck
  },
  
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {orderState.map((data, i)=>(
            <SmallCard data={data} key={i}/>
        ))}
    </div>
  )
}
