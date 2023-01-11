import Link from 'next/link';
import React from 'react';

const Card = ({ data, icon,link }) => {
  return (
    <Link href={`/${link}`} >
      <div className="relative group flex flex-col items-center py-8 space-y-2 bg-indigo-700 rounded-xl w-[110px] h-[130px] cursor-pointer  ring-4 ring-gray-500 hover:ring-indigo-300 dark:hover:ring-indigo-300 dark:ring-gray-100">

        <div className=" w-[52px] h-[52px] text-indigo-300 dark:text-indigo-300 group-hover:text-gray-50 dark:group-hover:text-gray-50 ">
          {icon}
        </div>

        <div className="absolute bottom-0 bg-indigo-500 w-full py-1 rounded-b-xl">
          <p className='text-md text-center font-urbanist font-bold text-gray-800  dark:text-gray-100'>{data}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card