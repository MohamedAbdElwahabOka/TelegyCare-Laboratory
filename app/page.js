'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import ProductApis from './_utils/ProductApis'
const navItems = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>,
    link: "#",
    text: "Patient ID",
    isActive: true,
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
    link: "#",
    text: "Patient List",
    isActive: false,
  },
]
export default function Home() {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    getTests_();
  }, [])

  const getTests_ = () => {
    ProductApis.getTests().then(res => {
      console.log(res.data.data);
      // setLatestProducts(res.data.data);
      // setLoading(true)

    })
  }
  const [sidebarToggled, setSidebarToggled] = useState(false)
  const [sidebarResized, setSidebarResized] = useState(false)
  const toggleSidebar = () => {
    setSidebarToggled(sidebarToggled => !sidebarToggled)
  }
  const resizeSidebar = () => {
    setSidebarResized(sidebarResized => !sidebarResized)
  }

  return (
    <>
      <aside className={`
        fixed h-[100dvh] overflow-hidden lg:static w-11/12 max-w-[18rem] md:w-72 transition-all rounded-r-2xl bg-white dark:bg-[#0070CD] shadow-lg shadow-gray-200/40 dark:shadow-gray-800/60 flex flex-col justify-between px-4 lg:transition-[width] ease-linear
        ${sidebarToggled ? "" : "-translate-x-full lg:-translate-x-0"}
        ${sidebarResized ? "lg:w-20" : ""}
    `}>
        <div className="min-h-max py-4 border-b border-b-gray-200 dark:border-b-gray-800">
          <Link href="#" data-logo-box className="flex items-center gap-x-3 text-lg font-semibold text-gray-800 dark:text-gray-200 ml-20">
            <svg width="62" height="49" viewBox="0 0 62 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M58.005 3.98202C63.3317 9.29138 63.3317 17.8994 58.005 23.2087L38.7158 42.4354L34.8579 38.5901L54.1159 19.3943L54.1473 19.3634C57.3432 16.1777 57.3432 11.0127 54.1473 7.82729C50.9513 4.64154 45.7695 4.64154 42.5736 7.82729L23.2844 27.054L19.4266 23.2087L38.7158 3.98202C44.0424 -1.32734 52.6784 -1.32734 58.005 3.98202Z" fill="url(#paint0_linear_423_11728)" />
              <path d="M19.4264 7.82729L23.2844 3.98202C17.9577 -1.32734 9.3216 -1.32734 3.99497 3.98202C-1.33166 9.29138 -1.33166 17.8994 3.99497 23.2087L23.2842 42.4354L27.1421 38.5901L7.85292 19.3634C4.65697 16.1777 4.65697 11.013 7.85292 7.82729C11.0489 4.64188 16.2305 4.64188 19.4264 7.82729Z" fill="url(#paint1_linear_423_11728)" />
              <path d="M50.2893 15.5181C49.224 16.58 47.4968 16.58 46.4315 15.5181C45.3662 14.4563 45.3662 12.7346 46.4315 11.6728C47.4968 10.6109 49.224 10.6109 50.2893 11.6728C51.3547 12.7346 51.3547 14.4563 50.2893 15.5181Z" fill="url(#paint2_linear_423_11728)" />
              <path d="M46.4315 11.6728L50.2893 15.5181L27.1421 38.5901L23.2844 34.745L46.4315 11.6728Z" fill="url(#paint3_linear_423_11728)" />
              <path d="M15.5686 11.6727C16.6339 12.7346 16.6339 14.4562 15.5686 15.518C14.5033 16.5799 12.7761 16.5799 11.7107 15.518C10.6454 14.4562 10.6454 12.7346 11.7107 11.6727C12.7761 10.6108 14.5033 10.6108 15.5686 11.6727Z" fill="url(#paint4_linear_423_11728)" />
              <path d="M21.3555 9.74997C20.2902 8.6881 20.2902 6.96648 21.3555 5.90462C22.4208 4.84275 24.1481 4.84275 25.2134 5.90462C26.2787 6.96648 26.2787 8.6881 25.2134 9.74997C24.1481 10.8118 22.4208 10.8118 21.3555 9.74997Z" fill="url(#paint5_linear_423_11728)" />
              <path d="M25.2134 5.90462L21.3555 9.74997L19.4264 7.82729L23.2844 3.98202L25.2134 5.90462Z" fill="url(#paint6_linear_423_11728)" />
              <path d="M29.0712 44.3583C30.1365 43.2964 31.8637 43.2964 32.929 44.3583C33.9943 45.4201 33.9943 47.1417 32.929 48.2036C31.8637 49.2655 30.1365 49.2655 29.0712 48.2036C28.0058 47.1417 28.0058 45.4201 29.0712 44.3583Z" fill="url(#paint7_linear_423_11728)" />
              <path d="M32.929 48.2036L29.0712 44.3583L34.8579 38.5901L38.7158 42.4354L32.929 48.2036Z" fill="url(#paint8_linear_423_11728)" />
              <path d="M19.4266 23.2087L23.2843 19.3635L15.5686 11.6727C16.6339 12.7346 16.6339 14.4562 15.5686 15.518C14.5033 16.5799 12.7761 16.5799 11.7107 15.518L19.4266 23.2087Z" fill="url(#paint9_linear_423_11728)" />
              <defs>
                <linearGradient id="paint0_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint1_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint2_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint3_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint4_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint5_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint6_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint7_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint8_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
                <linearGradient id="paint9_linear_423_11728" x1="-1.32317" y1="-101.063" x2="63.8659" y2="-96.8926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0070CD" />
                  <stop offset="0.0001" stop-color="#0070CD" />
                  <stop offset="1" stop-color="#8FCFFF" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <span className={`ml-20 text-slate-100 
                    ${sidebarResized ? "lg:invisible" : ""}
                `}>TelEgyCare</span>
        </div>
        <nav className="h-full pt-10">
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            {
              navItems.map(navItem => (
                <li key={navItem.id}>
                  <Link href={navItem.link} className={`
                                flex items-center gap-x-4 px-3 py-2.5 rounded-md
                                ${navItem.isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"}
                            `}>
                    <span className="min-w-max inline-flex">
                      {navItem.icon}
                    </span>
                    <span className={`
                                    inline-flex ease-linear transition-colors duration-300
                                    ${sidebarResized ? "lg:invisible" : ""}`}>
                      {navItem.text}
                    </span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="min-h-max py-2 hidden lg:flex justify-end bg-transparent">
          <button onClick={() => { resizeSidebar() }} className={`
                outline-none bg-gray-100 dark:bg-gray-900 rounded-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 ease-linear transition-transform  w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                ${sidebarResized ? "rotate-180" : ""}
            `}>
            <span className="sr-only">toggle sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </aside>



      <main>
        <div className="flex lg:hidden fixed right-2 top-2 p-4">
          <button onClick={() => { toggleSidebar() }} className="p-3 rounded-full bg-blue-600 dark:bg-blue-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
            <span className="sr-only">
              toggle sidebar
            </span>
            <span className={`
                        w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                        ${sidebarToggled ? "rotate-[40deg] translate-y-1.5" : ""}
                    `} />
            <span className={`
                        w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                        ${sidebarToggled ? "opacity-0 scale-x-0" : ""}
                    `} />
            <span className={`
                        w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                        ${sidebarToggled ? "-rotate-[40deg] -translate-y-1.5" : ""}
                    `} />
          </button>
        </div>
      </main>
    </>

  );
}
