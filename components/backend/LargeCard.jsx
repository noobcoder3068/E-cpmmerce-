import React from 'react';
import { Layers } from 'lucide-react';

export default function LargeCard({item}) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${item.color} `}>
        <Layers className=''/>
        <h4>{item.period}</h4>
        <h2 className='lg:text-3xl text:2xl'>UGX.108.${item.sales}</h2>
    </div>
  )
}
