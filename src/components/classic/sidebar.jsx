
'use client';
import { motion } from "framer-motion";

import Link from 'next/link'
import { Separator } from "@/components/(shadcn components)/ui/separator"
// icons
import { MdAccessTime, MdOutlineAutofpsSelect, MdOutlineDashboardCustomize, MdOutlineFileUpload, MdOutlineHorizontalRule } from "react-icons/md";
import { TbCircleDashedNumber2, TbInputAi, TbTimelineEvent, TbTooltip, TbUser } from "react-icons/tb";
import { FaChartBar, FaListCheck, FaRegFile, FaRegStar, FaRegWindowRestore } from "react-icons/fa6";
import { RiMessage3Line } from "react-icons/ri";
import { BiMoneyWithdraw, BiWallet } from "react-icons/bi";
import { IoAlertCircleOutline, IoAnalytics, IoCalendarOutline, IoCheckbox } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FaBalanceScaleRight, FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { TbCircleDashedNumber1 } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { BiWorld } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import Loading from '@/app/loading';
import { RiHome3Line } from "react-icons/ri";
import Router from 'next/router';
import { FaChartLine } from "react-icons/fa6";
import { TbChartTreemap } from "react-icons/tb";
import { IoPieChartOutline } from "react-icons/io5";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TfiLayoutAccordionList, TfiLayoutGrid3 } from "react-icons/tfi";
import { LuCandlestickChart, LuRectangleHorizontal } from "react-icons/lu";
import { LuScatterChart } from "react-icons/lu";
import { FaChartColumn } from "react-icons/fa6";
import { RiDonutChartLine } from "react-icons/ri";
import { RxAvatar, RxButton, RxDropdownMenu, RxSection } from "react-icons/rx";
import { BsBadgeAd, BsTextareaResize } from 'react-icons/bs';
import { PiAppWindowThin, PiCardsThin } from "react-icons/pi";
import { IoIosCheckboxOutline, IoMdRadioButtonOn } from 'react-icons/io';
import { GoSingleSelect } from 'react-icons/go';

const sideBar_Links = [
     // {
     //      icon: "",
     //      name: "",
     //      href: "",
     //      subLinks: ""
     // },
     {
          icon: <RiHome3Line className="text-[16px]  w-[30px]" />,
          name: "Home",
          href: "/",
          subLinks: []
     },
     // ------> seccion 1 
     {
          icon: <BiMoneyWithdraw className="text-[16px]  w-[30px]" />,
          name: "Price",
          href: "/price",
          subLinks: []
     }, {
          icon: <FaBalanceScaleRight className="text-[16px]  w-[30px]" />,
          name: "Balance",
          href: "/balance",
          subLinks: []
     }, {
          icon: <FaRegFile className="text-[16px]  w-[30px]" />,
          name: "Files",
          href: "/files",
          subLinks: []
     },
     {
          icon: <BiTask className="text-[16px]  w-[30px]" />,
          name: "Task",
          href: "/task",
          subLinks: []
     }, {
          separator: <Separator className="my-4 bg-zinc-300" />,
          title: "Billing"
     },
     {
          icon: <BiWallet className="text-[16px]  w-[30px]" />,
          name: "Wallet",
          href: "/wallet",
          subLinks: []
     },
     {
          separator: <Separator className="my-4 bg-zinc-300" />,
          title: "Setup"
     },
     {
          icon: <IoSettingsOutline className="text-[16px]  w-[30px]" />,
          name: "Settings",
          href: "/settings",
          subLinks: []
     },
     {
          separator: <Separator className="my-4 bg-zinc-300" />,
          title: "Form"
     },
     {
          icon: <IoIosCheckboxOutline className="text-[16px]  w-[30px]" />,
          name: "Checkbox",
          href: "/form/checkbox",
          subLinks: []
     },
     {
          icon: <MdOutlineFileUpload className="text-[16px]  w-[30px]" />,
          name: "File Input",
          href: "/form/fileInput",
          subLinks: []
     },
     {
          icon: <TbInputAi className="text-[16px]  w-[30px]" />,
          name: "Input",
          href: "/form/input",
          subLinks: []
     },
     {
          icon: <IoMdRadioButtonOn className="text-[16px]  w-[30px]" />,
          name: "Radio",
          href: "/form/radio",
          subLinks: []
     },
     {
          icon: <GoSingleSelect className="text-[16px]  w-[30px]" />,
          name: "Select",
          href: "/form/select",
          subLinks: []
     },
     {
          icon: <BsTextareaResize className="text-[16px]  w-[30px]" />,
          name: "Textarea",
          href: "/form/textarea",
          subLinks: []
     },
     {
          icon: <MdAccessTime className="text-[16px]  w-[30px]" />,
          name: "Timepicker",
          href: "/form/timepicker",
          subLinks: []
     },
     {
          separator: <Separator className="my-4 bg-zinc-300" />,
          title: "UI"
     },
     {
          icon: <TfiLayoutAccordionList className="text-[16px]  w-[30px]" />,
          name: "Accordion",
          href: "/ui/accordion",
          subLinks: []
     },
     {
          icon: <IoAlertCircleOutline className="text-[16px]  w-[30px]" />,
          name: "Alert",
          href: "/ui/alert",
          subLinks: []
     },
     {
          icon: <RxAvatar className="text-[16px]  w-[30px]" />,
          name: "Avatar",
          href: "/ui/avatar",
          subLinks: []
     },
     {
          icon: <BsBadgeAd className="text-[16px]  w-[30px]" />,
          name: "Badge",
          href: "/ui/badge",
          subLinks: []
     },
     {
          icon: <LuRectangleHorizontal className="text-[16px]  w-[30px]" />,
          name: "Banner",
          href: "/ui/banner",
          subLinks: []
     },
     {
          icon: <RxButton className="text-[16px]  w-[30px]" />,
          name: "Button",
          href: "/ui/button",
          subLinks: []
     },
     {
          icon: <MdOutlineAutofpsSelect className="text-[16px]  w-[30px]" />,
          name: "Breadcrumbs",
          href: "/ui/breadcrumbs",
          subLinks: []
     },
     {
          icon: <IoCalendarOutline className="text-[16px]  w-[30px]" />,
          name: "Calendar",
          href: "/ui/calendar",
          subLinks: []
     },
     {
          icon: <PiCardsThin className="text-[16px]  w-[30px]" />,
          name: "Card",
          href: "/ui/card",
          subLinks: []
     },
     {
          icon: <RxDropdownMenu className="text-[16px]  w-[30px]" />,
          name: "Dropdown",
          href: "/ui/dropdown",
          subLinks: []
     },
     {
          icon: <FaRegWindowRestore className="text-[16px]  w-[30px]" />,
          name: "Modal",
          href: "/ui/modal",
          subLinks: []
     },
     {
          icon: <FaListCheck className="text-[16px]  w-[30px]" />,
          name: "List",
          href: "/ui/list",
          subLinks: []
     },
     {
          icon: <MdOutlineHorizontalRule className="text-[16px]  w-[30px]" />,
          name: "Progress",
          href: "/ui/progress",
          subLinks: []
     },
     {
          icon: <FaRegStar className="text-[16px]  w-[30px]" />,
          name: "Rating",
          href: "/ui/rating",
          subLinks: []
     },
     {
          icon: <RxSection className="text-[16px]  w-[30px]" />,
          name: "Stepper",
          href: "/ui/stepper",
          subLinks: []
     },
     {
          icon: <PiAppWindowThin  className="text-[16px]  w-[30px]" />,
          name: "Toast",
          href: "/ui/toast",
          subLinks: []
     },
     {
          icon: <TbTooltip className="text-[16px]  w-[30px]" />,
          name: "Tooltip",
          href: "/ui/tooltip",
          subLinks: []
     },
     {
          icon: <TbTimelineEvent className="text-[16px]  w-[30px]" />,
          name: "TimeLine",
          href: "/ui/timeline",
          subLinks: []
     },

     {
          separator: <Separator className="my-4 bg-zinc-300" />,
          title: "Chart"
     },
     {
          icon: <FaChartBar className="text-[16px]  w-[30px]" />,
          name: "Bar",
          href: "/chart/bar",
          subLinks: []
     },
     {
          icon: <LuCandlestickChart className="text-[16px]  w-[30px]" />,
          name: "Candlestick",
          href: "/chart/candlestick",
          subLinks: []
     },
     {
          icon: <FaChartColumn className="text-[16px]  w-[30px]" />,
          name: "Column",
          href: "/chart/column",
          subLinks: []
     },
     {
          icon: <TfiLayoutGrid3 className="text-[16px]  w-[30px]" />,
          name: "Heatmap",
          href: "/chart/heatmap",
          subLinks: []
     },
     {
          icon: <FaChartLine className="text-[16px]  w-[30px]" />,
          name: "Line",
          href: "/chart/line",
          subLinks: []
     },
     {
          icon: <IoPieChartOutline className="text-[16px]  w-[30px]" />,
          name: "Pie",
          href: "/chart/pie",
          subLinks: []
     },
     {
          icon: <AiOutlineRadarChart className="text-[16px]  w-[30px]" />,
          name: "Radar",
          href: "/chart/radar",
          subLinks: []
     },
     {
          icon: <RiDonutChartLine className="text-[16px]  w-[30px]" />,
          name: "radialbar",
          href: "/chart/radialbar",
          subLinks: []
     },
     {
          icon: <LuScatterChart className="text-[16px]  w-[30px]" />,
          name: "Scatter",
          href: "/chart/scatter",
          subLinks: []
     },
     {
          icon: <TbChartTreemap className="text-[16px]  w-[30px]" />,
          name: "Treemap",
          href: "/chart/treemap",
          subLinks: []
     },

]
const classActive = { scale: 1.1, y: 1, color: "#2563EB" };

const getClassActive = ( path, href ) => {
     if ( path.includes( href ) ) return classActive
}
function SideBar() {
     const pathname = usePathname();
     const [isLoading, setIsLoading] = useState( false );

     useEffect( () => {
          const handleStart = () => {
               setIsLoading( true );
          };

          const handleComplete = () => {
               setIsLoading( false );
          };

          Router.events.on( 'routeChangeStart', handleStart );
          Router.events.on( 'routeChangeComplete', handleComplete );
          Router.events.on( 'routeChangeError', handleComplete );

          return () => {
               Router.events.off( 'routeChangeStart', handleStart );
               Router.events.off( 'routeChangeComplete', handleComplete );
               Router.events.off( 'routeChangeError', handleComplete );
          };
     }, [pathname] );


     return (
          <>
               <motion.div
                    className="p-3 z-40 flex flex-col lg:w-[240px] bg-[#FFF] dark:bg-black h-[94vh] overflow-y-auto pt-10"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
               >
                    <p className="text-zinc-400 text-xs lg:text-normal text-center lg:text-start font-500">Activity</p>
                    <div className="flex flex-col gap-1 pl-3 mt-14 sm:mt-3">
                         <div className="flex flex-col gap-1 pl-3 mt-14 sm:mt-3">
                              {sideBar_Links.map( ( linkA, key ) => (
                                   <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: key * 0.1 }}
                                   >
                                        {linkA?.separator && (
                                             <div>
                                                  {linkA.separator}
                                                  {linkA?.title && (
                                                       <p className="text-zinc-400 text-xs lg:text-normal text-center lg:text-start font-500">{linkA.title}</p>
                                                  )}
                                             </div>
                                        )}
                                        {!linkA?.separator && (
                                             <>
                                                  {linkA.subLinks.length === 0 && (
                                                       <motion.div
                                                            initial={{color:"#2A3547"}}
                                                            animate={linkA.href == pathname ? classActive : {color:"#2A3547"}}
                                                            whileHover={{ scale: 1.1, y: 1 }} className="hover:text-[#2563EB] text-[#2A3547] dark:text-[#697a97]">
                                                            <Link href={linkA.href} className="text-[15px] flex gap-1 items-center font-normal rounded-xl p-3 transition-all ">
                                                                 {linkA.icon} <span className="hidden lg:inline">{linkA.name}</span>
                                                            </Link>
                                                       </motion.div>
                                                  )}
                                                  {linkA.subLinks.length > 0 && (
                                                       <>
                                                            <div className="cursor-pointer hidden lg:flex gap-1 items-center font-normal text-zinc-700 rounded-xl p-3 transition-all dark:text-white">
                                                                 {linkA.icon} {linkA.name}
                                                            </div>
                                                            <ul className="border-l-[1px] border-zinc-300 flex flex-col gap-1 justify-center items-center">
                                                                 {linkA.subLinks.map( ( sublink, indexKey ) => (
                                                                      <li key={indexKey}>
                                                                           <Link
                                                                                href={sublink.href}
                                                                                className="text-xs flex gap-1 items-center font-normal text-zinc-600 rounded-xl p-3 transition-all dark:text-white"
                                                                           >
                                                                                {sublink.icon} <span className="hidden lg:inline">{sublink.name}</span>
                                                                           </Link>
                                                                      </li>
                                                                 ) )}
                                                            </ul>
                                                       </>
                                                  )}
                                             </>
                                        )}
                                   </motion.div>
                              ) )}

                         </div>
                    </div>
               </motion.div>
               {isLoading && <Loading />}
          </>
     );
}

export default SideBar;
