import React from 'react'

const userProfileClasses = {
    container: "flex items-center pt-1 pb-0 md:pt-8 md:pb-0  ",
    iphone__shell: "mx-auto h-[660px] w-[325px] md:h-[680px] md:w-[350px] bg-[#2c2d7c] rounded-[60px] border-[14px] border-black relative overflow-hidden ring-4 ring-indigo-500 shadow-2xl shadow-indigo-400",
    iphone__shell__img: "absolute inset-0 h-full w-full object-cover",
    iphone__shell__box1: "absolute top-0 inset-x-0",
    iphone__shell__box1__div: "mx-auto h-6 w-40 rounded-b-3xl  bg-black",
    iphone__shell__box2: "relative  ",
    iphone__shell__box2__div: "mr-5 mt-2 flex justify-end space-x-1 ",
    iphone__shell__box2__div__svg: "h-4 w-4 text-white",
    iphone__shell__box3: "absolute top-8 left-0 md:top-16 md:left-0 w-[296px] h-[610px] md:w-[320px] md:h-[545px]  ",
    iphone__shell__box3__div: "flex flex-col items-center mt-3 space-y-6",
    iphone__shell__box3__div__profile: "flex flex-col items-center justify-center space-y-3 ",
    iphone__shell__box3__div__profile__p: "text-2xl text-center font-bold font-ibm text-gray-100",
    iphone__shell__box3__div__links: "flex flex-col items-center space-y-6 ",
};

const MobileLayout = ({ children }) => {
    return (
        <div className={userProfileClasses.container}>
            {/* Share Button */}
            {/* The iPhone shell  */}
            <div className={userProfileClasses.iphone__shell}>
                {/* <img
                    className={userProfileClasses.iphone__shell__img}
                    src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg"
                /> */}
                <div className={userProfileClasses.iphone__shell__box1}>
                    <div className={userProfileClasses.iphone__shell__box1__div}></div>
                </div>

                <div className={userProfileClasses.iphone__shell__box2}>
                    {/* Small icons on top right  */}
                    <div className={userProfileClasses.iphone__shell__box2__div}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={userProfileClasses.iphone__shell__box2__div__svg}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={userProfileClasses.iphone__shell__box2__div__svg}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={userProfileClasses.iphone__shell__box2__div__svg}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                    </div>
                </div>

                <div className={userProfileClasses.iphone__shell__box3}>
                    {children}
                </div>
                <div className="absolute -bottom-3 -left-1 flex w-[330px] h-[60px] ">

                </div>
            </div>
        </div>
    );
};

export default MobileLayout;