import React from 'react'
import Avatar from './Avatar';
import { ArrowRightOnRectangleIcon, Bars3Icon } from "@heroicons/react/24/solid"

const MobileNav = ({ username, handleLogout, page }) => {
    return (
        <div className='flex flex-col items-center justify-between   w-full '>
            <div className='flex pt-2 justify-between w-full  px-2'>
                <div className="flex items-center justify-center  w-8 h-8 rounded-md border-[3px] border-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0.7" stroke="#fff"  fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

                </div>

                <div className="flex items-center justify-center">
                    <Avatar username={username} />
                </div>

                <div className="flex ">
                    <button
                        onClick={handleLogout}
                        type="submit"
                        className="w-8 h-8  bg-indigo-600/70 rounded-md flex items-center justify-center ring-[3px] ring-indigo-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="0.7" stroke="#fff" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>

                    </button>
                </div>

            </div>


            <div className="flex items-center px-3 py-0.5  ">
                <p className="text-xl font-urbanist font-bold text-indigo-100 ">
                    {page}
                </p>
            </div>
        </div>
    )
}

export default MobileNav





{/* <button
       onClick={handleLogout}
        type="submit"
        className="w-full btn bg-indigo-600 px-2 py-1 text-white  hover:shadow-2xl hover:opacity-80 "
                >
          Logout
</button> */}
