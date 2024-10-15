"use client"
import React from "react";
import Lottie from "lottie-react";
import notFound404 from "./not-found-animation.json";

export default function Custom404() {
     return <div className="fixed z-50 flex justify-center items-center w-[100vw] h-[90%]"><Lottie animationData={notFound404} loop={true}  /></div>;
   }