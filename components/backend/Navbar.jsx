import React from 'react';
import { Sun, AlignJustify, Bell, User} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LayoutDashboard } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import ThemeSwitcher from '../ThemeSwitch';

export default function Navbar() {
  return (
    <div className='flex items-center py-8 justify-between bg-slate-50 dark:bg-slate-800 text-slate-50 h-16 ml-60 fixed top-0 w-full z-50 pr-[17rem]'>
        <button className='text-green-500 dark:text-green-700'>
            <AlignJustify />
        </button>
        <div className="flex space-x-3">
            <ThemeSwitcher />
            
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transperent rounded-lg ">
            <Bell className='text-green-700'/>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 
            text-xs font-bold text-white bg-red-500 border-2 border-white
             rounded-full top-1 end-1 dark:border-gray-900">20</div>
            </button>

            <DropdownMenu>
  <DropdownMenuTrigger>
            <button>
                <img src='123.jpg' width={200} height={200} className='w-8 h-8 rounded-full'></img>
            </button> 
  </DropdownMenuTrigger>
  <DropdownMenuContent className=''>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <LayoutDashboard className='mr-2 h-4 w-4' />
            <span>Dashboard</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <LogOut className='mr-2 h-4 w-4' />
            <span>LogOut</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
    </div>
  )
}
