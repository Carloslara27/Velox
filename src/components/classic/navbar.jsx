"use client"
import { Button } from "@/components/(shadcn components)/ui/button";
// notifications
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuShortcut,
     DropdownMenuTrigger,
} from "@/components/(shadcn components)/ui/dropdown-menu"
import Link from 'next/link'
import { useState } from "react";
// icons
import { IoMdNotifications } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
function Navbar() {
     const [showMenu,setShowMenu] = useState(false)
     const [darkMode,setDarkMode] = useState('dark')
     // dark mode 
     const handleDarkMode = () => {
          const isDarkMode =
               localStorage.theme === 'dark' ||
               ( !( 'theme' in localStorage ) &&
                    window.matchMedia( '(prefers-color-scheme: dark)' ).matches );

          if ( isDarkMode ) {
               document.documentElement.classList.add( 'dark' );
               document.documentElement.classList.remove( 'light' );
               localStorage.theme = 'light';
               setDarkMode('light')
          } else {
               document.documentElement.classList.remove( 'dark' );
               document.documentElement.classList.add( 'light' );
               localStorage.theme = 'dark';
               setDarkMode('dark')
          }
     };
     const handleShowMenu = () => setShowMenu(!showMenu);

     return (

          <nav className="fixed top-0 z-50 w-full bg-white light:bg-black dark:bg-black border-b border-gray-200  dark:border-gray-900">
               <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center justify-start rtl:justify-end">
                              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={handleShowMenu}>
                                   <span className="sr-only">Open sidebar</span>
                                   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                   </svg>
                              </button>
                              {/*  */}
                              <Link href="/" className="flex ms-2 md:me-24">
                                   <img src="/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                              </Link>
                         </div>
                         <div className="flex items-center">
                              <div className="flex items-center ms-3">
                                   {/*  */}
                                   <div className="flex gap-2 items-center">
                                        {/* icons */}
                                        <Button variant="outline" size="icon" className="rounded-full" onClick={handleDarkMode}>
                                             {darkMode !== 'dark' ?<MdSunny className="h-4 w-4 dark:text-zinc-300" /> :<MdDarkMode className="h-4 w-4 dark:text-zinc-300" />}
                                        </Button>

                                        <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                  <Button variant="outline" size="icon" className="rounded-full">
                                                       <IoMdNotifications className="h-4 w-4 dark:text-zinc-300" />
                                                  </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent className="w-[100%] max-w-[350px] mr-20 mt-2 dark:bg-black/30 dark:text-zinc-200">
                                                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                                                  <DropdownMenuSeparator />
                                                  <DropdownMenuGroup>
                                                       <DropdownMenuItem className="flex items-center">
                                                            <FaCircle className="mr-2 text-[.5rem] text-green-500" />
                                                            <span className="text-zinc-500 dark:text-white w-60 text-xs text-wrap">Profile</span>
                                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                       </DropdownMenuItem>
                                                       <DropdownMenuItem className="flex items-center">
                                                            <FaCircle className="mr-2 text-[.5rem] text-green-500" />
                                                            <span className="text-zinc-500 dark:text-white w-60 text-xs text-wrap">New inspetion assined:QW001</span>
                                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                       </DropdownMenuItem>
                                                       <DropdownMenuItem className="flex items-center">
                                                            <FaCircle className="mr-2 text-[.5rem] text-green-500" />
                                                            <span className="text-zinc-500 dark:text-white w-60 text-xs text-wrap">Settings</span>
                                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                       </DropdownMenuItem>
                                                       <DropdownMenuItem className="flex items-center">
                                                            <FaCircle className="mr-2 text-[.5rem] text-green-500" />
                                                            <span className="text-zinc-500 dark:text-white w-60 text-xs text-wrap">Keyboard shortcuts</span>
                                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                                       </DropdownMenuItem>
                                                  </DropdownMenuGroup>

                                             </DropdownMenuContent>
                                        </DropdownMenu>
                                        {/*  */}
                                        <Button variant="outline" size="icon" className="rounded-full">
                                             <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                        </Button>
                                   </div>
                                   {/* no mostrar */}
                                   <div className={`${showMenu ? "":"hidden"} z-50 fixed left-0 top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                        <div className="px-4 py-3" role="none">
                                             <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                  Neil Sims
                                             </p>
                                             <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                  neil.sims@flowbite.com
                                             </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                             <li>
                                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </nav>
     );
}

export default Navbar;



