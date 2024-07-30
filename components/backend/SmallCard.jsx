import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function SmallCard({data}) {
  return (
    <div className='rounded-lg text-slate-800 p-2 bg-slate-50 dark:bg-slate-700 shadow-lg shadow flex items-center gap-3'>
        <div className={`${data.color} rounded-full h-9 w-9 flex items-center justify-center`}>
            <data.icon />
        </div>
        <div className=''>
            <p>{data.status}</p>
            <h3>{data.number}</h3>
        </div>
    </div>
  )
}
