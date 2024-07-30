import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React from 'react'

export default function Layout({children}) {
 return (
    <div className='flex '>
        <Sidebar />
        <div className='w-full'>
            <Navbar />
            <main className='p-8 bg-slate-200 dark:bg-slate-900 text-slate-50 min-h-screen ml-60 mt-16'>
              {children}
            </main>
        </div>
    </div>
  )
}
