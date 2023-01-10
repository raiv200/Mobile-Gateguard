import React from 'react'
import MobileLayout from './MobileLayout'
import Link from 'next/link'

const NotAuthenticated = () => {
  return (
    <MobileLayout>
        <div className=' mx-auto mt-20 flex flex-col space-y-8 items-center justify-center'>
                    <p className="text-xl font-bold text-gray-100 text-center">
                        You are not Autheticated. Please Login first.
                    </p>
                    <Link href="/login">
                        <a

                            className="w-40 text-center btn  bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80"
                        >
                            Login
                        </a>
                    </Link>
                </div>      
    </MobileLayout>
  )
}

export default NotAuthenticated