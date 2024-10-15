"use client"
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./loader-animation.json";

const Loading = () => <div className="fixed z-50 flex justify-center items-center w-[100vw] h-[100vh]"><Lottie animationData={loaderAnimation} loop={true} className="max-w-[250px]" /></div>;

export default Loading;