import React from 'react'
import Sidebar from '../_components/Sidebar'
import { document } from 'postcss';
// import { Parser } from 'html-to-react';




function payment() {
  return (
    <>

      <div className='flex'>
        <Sidebar />

        <div className='flex min-h-screen flex-col items-center justify-between p-6 lg:p-24'>
          <form className='bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-300'>
              <div className="mb-4">
                <label className="text-neutral-800 font-bold text-sm mb-2 block">
                  Card number:
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  onclick="hideBackCard()"
                  className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                  maxlength={19}
                  placeholder="XXXX XXXX XXXX XXXX"
                  value="4256 4256 4256 4256"
                />
              </div>
              <div className="flex gap-x-2 mb-4">
                <div className="block">
                  <label className="text-neutral-800 font-bold text-sm mb-2 block"
                  >Exp. date:</label
                  >
                  <input
                    id="expDate"
                    type="text"
                    onclick="hideBackCard()"
                    className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                    maxlength="5"
                    placeholder="MM/YY"
                    value="12/24"
                  />
                </div>
                <div className="block">
                  <label className="text-neutral-800 font-bold text-sm mb-2 block"
                  >CCV:</label
                  >
                  <input
                    id="ccvNumber"
                    type="text"
                    onclick="showBackCard()"
                    className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                    maxlength="3"
                    placeholder="123"
                    value="342"
                  />
                </div>
              </div>


              <div className="mb-4">
                <label className="text-neutral-800 font-bold text-sm mb-2 block"
                >Card holder:</label
                >
                <input
                  id="cardName"
                  type="text"
                  onclick="hideBackCard()"
                  className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                  placeholder="John Doe"
                  value="John Doe"
                />
              </div>
            </div>





          </form>
        </div>

        {/* <Script type="text/javascript" src="./main.js" /> */}
      </div>
    </>
  )
}

export default payment
