import React from 'react';
import { Sun, AlignJustify, Bell, User} from 'lucide-react';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-slate-800 text-slate-50 h-16 ml-60 fixed top-0 w-full'>
        <button>
            <AlignJustify />
        </button>
        <div className="flex space-x-3">
            <button>
                <Sun />
            </button>
            <button>
                <Bell />
            </button>
            <button>
                <User />
            </button>
        </div>
    </div>
  )
}
