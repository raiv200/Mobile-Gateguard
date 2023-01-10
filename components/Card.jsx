import React from 'react';

const Card = ({data,icon}) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 space-y-2 bg-indigo-200 dark:bg-indigo-500/30 rounded-xl w-[140px] h-[160px] ring-4 ring-gray-500 dark:ring-gray-100">
        
            <div className=" w-10 h-10 text-indigo-400 dark:text-indigo-500 ">
                {icon}
            </div>
        
        <p className='text-lg text-center font-urbanist font-bold text-gray-800  dark:text-gray-100'>{data}</p>
    </div>
  )
}

export default Card