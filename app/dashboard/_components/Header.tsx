"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'
import { LogOut } from 'lucide-react'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components' 

function Header() {
  const { user } = useKindeBrowserClient(); 
  const router = useRouter();

  return (
    <div className="border-b-2 flex gap-8 bg-white justify-between lg:px-10 px-4 py-3 lg:py-1 sticky-top z-[100]">
      <Image
        src={"/hhh1.png"}
        width={260}
        height={50}
        alt="logo"
        className="lg:py-5 lg:px-10 py-3 px-1"
      />

      <div className="flex justify-center items-center">
      
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 font-semibold border-2 p-1 rounded-lg cursor-pointer text-md">
            {user?.picture ? (
              <Image
                src={user.picture}
                width={35}
                height={35}
                alt="user"
                className="rounded-full"
              />
            ) : (
              <div className="w-[35px] h-[35px] bg-gray-200 rounded-full" />
            )}
            <h2>{user?.given_name} {user?.family_name}</h2>
          </Menu.Button>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 hover:bg-red-100">
              <div className="py-2">
                <Menu.Item>
                
                  <LogoutLink
                    className="text-red-600 hover:bg-red-100 px-4 py-2 text-left w-full flex items-center"
                    onClick={() => router.push('/')} 
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </LogoutLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
