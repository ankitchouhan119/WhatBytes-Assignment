"use client";
import React, { ReactNode } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return(
        <div className='w-full mb-10'>

            <div className='  fixed w-full bg-white z-[999]'>
                <Header/>
            </div>

            <div className='lg:w-64 md:w-64 z-[99] bg-white  fixed w-full  lg:block md:block mt-[5rem] lg:mt-[5.4rem] md:mt-[6.4rem] lg:border-none md:border-none border-b-4 border-t-2'>
                <SideNav/>
            </div>

            <div className="md:ml-64">

            {children}

            </div>

        </div>

    )
}

export default Layout;
