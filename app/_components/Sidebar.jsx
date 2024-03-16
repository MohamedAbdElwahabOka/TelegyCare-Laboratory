'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";

function Sidebar() {
    const navItems = [
        {
          id: 1,
          icon: <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1246 5.5C13.9408 7.97828 12.0621 10 9.99955 10C7.93705 10 6.05502 7.97875 5.87455 5.5C5.68705 2.92188 7.51517 1 9.99955 1C12.4839 1 14.3121 2.96875 14.1246 5.5Z" stroke="#0070CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.0001 13C5.92199 13 1.78293 15.25 1.01699 19.4969C0.924645 20.0088 1.21433 20.5 1.75011 20.5H18.2501C18.7864 20.5 19.0761 20.0088 18.9837 19.4969C18.2173 15.25 14.0782 13 10.0001 13Z" stroke="#0070CD" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
          ,
          link: "#",
          text: "Patient ID",
          isActive: true,
        },
        {
          id: 2,
          icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6673 2H3.33398C3.11297 2 2.90101 2.10536 2.74473 2.29289C2.58845 2.48043 2.50065 2.73478 2.50065 3V17C2.50065 17.2652 2.58845 17.5196 2.74473 17.7071C2.90101 17.8946 3.11297 18 3.33398 18H16.6673C16.8883 18 17.1003 17.8946 17.2566 17.7071C17.4129 17.5196 17.5007 17.2652 17.5007 17V3C17.5007 2.73478 17.4129 2.48043 17.2566 2.29289C17.1003 2.10536 16.8883 2 16.6673 2ZM3.33398 0C2.67094 0 2.03506 0.316071 1.56622 0.87868C1.09738 1.44129 0.833984 2.20435 0.833984 3V17C0.833984 17.7956 1.09738 18.5587 1.56622 19.1213C2.03506 19.6839 2.67094 20 3.33398 20H16.6673C17.3304 20 17.9662 19.6839 18.4351 19.1213C18.9039 18.5587 19.1673 17.7956 19.1673 17V3C19.1673 2.20435 18.9039 1.44129 18.4351 0.87868C17.9662 0.316071 17.3304 0 16.6673 0H3.33398ZM5.00065 5H6.66732V7H5.00065V5ZM9.16732 5C8.9463 5 8.73434 5.10536 8.57806 5.29289C8.42178 5.48043 8.33398 5.73478 8.33398 6C8.33398 6.26522 8.42178 6.51957 8.57806 6.70711C8.73434 6.89464 8.9463 7 9.16732 7H14.1673C14.3883 7 14.6003 6.89464 14.7566 6.70711C14.9129 6.51957 15.0007 6.26522 15.0007 6C15.0007 5.73478 14.9129 5.48043 14.7566 5.29289C14.6003 5.10536 14.3883 5 14.1673 5H9.16732ZM6.66732 9H5.00065V11H6.66732V9ZM8.33398 10C8.33398 9.73478 8.42178 9.48043 8.57806 9.29289C8.73434 9.10536 8.9463 9 9.16732 9H14.1673C14.3883 9 14.6003 9.10536 14.7566 9.29289C14.9129 9.48043 15.0007 9.73478 15.0007 10C15.0007 10.2652 14.9129 10.5196 14.7566 10.7071C14.6003 10.8946 14.3883 11 14.1673 11H9.16732C8.9463 11 8.73434 10.8946 8.57806 10.7071C8.42178 10.5196 8.33398 10.2652 8.33398 10ZM6.66732 13H5.00065V15H6.66732V13ZM8.33398 14C8.33398 13.7348 8.42178 13.4804 8.57806 13.2929C8.73434 13.1054 8.9463 13 9.16732 13H14.1673C14.3883 13 14.6003 13.1054 14.7566 13.2929C14.9129 13.4804 15.0007 13.7348 15.0007 14C15.0007 14.2652 14.9129 14.5196 14.7566 14.7071C14.6003 14.8946 14.3883 15 14.1673 15H9.16732C8.9463 15 8.73434 14.8946 8.57806 14.7071C8.42178 14.5196 8.33398 14.2652 8.33398 14Z" fill="white"/>
          </svg>,
          link: "#",
          text: "Patient List",
          isActive: false,
        },
      ]
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
                                ${navItem.isActive ? "bg-white dark:bg-white text-[#0070CD] dark:text-[#0070CD]" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"}
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
                outline-none bg-gray-100 dark:bg-[#ffffff] rounded-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 ease-linear transition-transform  w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                ${sidebarResized ? "rotate-180" : ""}
            `}>
            <span className="sr-only">toggle sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0070CD" className="w-5 h-5">
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
  )
}

export default Sidebar
