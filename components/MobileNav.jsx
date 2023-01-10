import React from 'react'
import Avatar from './Avatar';
import { MenuIcon } from "@heroicons/react/24/outline"

const MobileNav = ({ username, handleLogout }) => {
    return (
        <div className='flex items-center justify-between  px-2 w-full border-2 border-red-500'>
            {/* <div className="flex items-center justify-center  w-8 h-8 rounded-md border-2 border-gray-100">
                <MenuIcon className="w-6 h-6 text-gray-100" />
            </div> */}
            <div className="flex items-center justify-center">
                <Avatar username={username} />
            </div>

            {/* <div className="flex items-center px-3 py-3 border-2 border-red-400 ">
                    <p className="text-xl font-urbanist font-bold text-gray-100 ">
                     
                        <span className="ml-1 text-lg font-urbanist font-bold text-indigo-300">
                            @user
                        </span>
                    </p>
            </div>  */}
            
            <div className="flex ">

                <button
                    onClick={handleLogout}
                    type="submit"
                    className="w-full btn bg-indigo-600 px-2 py-1 text-white  hover:shadow-2xl hover:opacity-80 "
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default MobileNav