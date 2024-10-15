import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/classic/navbar";
import SideBar from "@/components/classic/sidebar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter( { subsets: ["latin"] } );

export const metadata = {
  title: "Velox - UI ",
  description: "Velox",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Velox</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="flex mt-[65px] overflow-hidden w-[100wv] h-[100vh] overflow-hidden">
          <SideBar />
          <Suspense fallback={<Loading />}>
            <div className="lg:w-full pt-3 px-3 dark:bg-zinc-900 h-full  bg-[#F6F8FA] w-[73%] sm:w-[90%] overflow-x-hidden">
              {children}
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
