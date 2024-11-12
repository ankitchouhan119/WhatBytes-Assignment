"use client";

import { Award, ChartNoAxesColumn, StickyNote } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function SideNav() {
    const [activePath, setActivePath] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: ChartNoAxesColumn,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Skill Test',
            icon: Award,
            path: '/dashboard/skillTest'
        },
        {
            id: 3,
            name: 'Internship',
            icon: StickyNote,
            path: '/dashboard/internship'
        },
    ];

    return (
        <div className="flex border-r-2 md:h-screen lg:h-screen lg:block md:block p-5">
            {menuList.map((menu) => (
                <Link href={menu.path} key={menu.id}>
                    <span
                        className={`flex  items-center gap-3 text-md font-semibold lg:p-4 lg:my-2 md:p-4 md:my-2 px-4 my-0 cursor-pointer 
                            ${activePath === menu.path 
                                ? 'bg-slate-100 rounded-r-3xl text-blue-600' 
                                : 'text-slate-500 hover:bg-slate-100 hover:rounded-r-3xl hover:text-blue-600'
                            }`}
                    >
                        {React.createElement(menu.icon, {
                            className: activePath === menu.path ? 'text-blue-600  lg:block md:block hidden lg:block md:block' : 'text-slate-500 hidden lg:block md:block'
                        })}
                        {menu.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}

export default SideNav;