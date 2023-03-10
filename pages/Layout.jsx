import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Auth } from "aws-amplify";
import Head from "next/head";
import MobileLayout from "../components/MobileLayout";
import MobileNav from "../components/MobileNav";
import NotAuthenticated from "../components/NotAuthenticated";
import { HomeIcon, ListBulletIcon, BellAlertIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";




const userProfileClasses = {
  container: "flex items-center pt-1 pb-0 md:pt-8 md:pb-0",
  iphone__shell: "mx-auto h-[660px] w-[325px] md:h-[680px] md:w-[350px] bg-[#2c2d7c] rounded-[55px] border-[14px] border-black relative overflow-hidden ring-4 ring-indigo-500 shadow-2xl shadow-indigo-400",
  iphone__shell__img: "absolute inset-0 h-full w-full object-cover",
  iphone__shell__box1: "absolute top-0 inset-x-0",
  iphone__shell__box1__div: "mx-auto h-6 w-40 rounded-b-3xl  bg-black",
  iphone__shell__box2: "relative  ",
  iphone__shell__box2__div: "mr-5 mt-2 flex justify-end space-x-1 ",
  iphone__shell__box2__div__svg: "h-4 w-4 text-white",
  iphone__shell__box3: "absolute top-8 left-0 md:top-16 md:left-0 w-[296px] h-[610px] md:w-[320px] md:h-[545px] ",
  iphone__shell__box3__div: "flex flex-col items-center mt-3 space-y-6",
  iphone__shell__box3__div__profile: "flex flex-col items-center justify-center space-y-3 ",
  iphone__shell__box3__div__profile__p: "text-2xl text-center font-bold font-ibm text-gray-100",
  iphone__shell__box3__div__links: "flex flex-col items-center space-y-6 ",
};

const Layout = ({ children, page }) => {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");

  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const { username, attributes } = user;

      setUser(username);
      setUserAuthData(attributes);

      console.log("Username: ", user);
      console.log("Attributes: ", attributes);
    };
    userAuth();
  }, []);

  /// USER AUTHENTICATION AND USER lOGOUT

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");


    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <div >
      <Head>
        <title>GateGuard.in</title>
        <link rel="icon" href="/gateguard-logo.svg" />
      </Head>
      {(userAuthData?.email_verified === true) ? (
        <>
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

                <MobileNav username={user} handleLogout={handleLogout} page={page} />

                {children}
              </div>
              <div className="absolute -bottom-0 -left-1 flex w-[330px] h-[60px] border-4 border-gray-100 rounded-b-lg bg-gray-50">

                <div className="flex items-center justify-between border-2 border-gray-100 w-full pl-5 pr-9 md:px-[24px] ">

                  <Link href="/app">

                    <div className="cursor-pointer flex flex-col items-center space-y-1">
                      <div className="w-6 h-6  bg-indigo-300/70 rounded-md flex items-center justify-center ring-[3px] ring-indigo-500 transition-all">

                        <HomeIcon className="w-4 h-4  text-indigo-500 " />
                      </div>
                      <p className="font-inter font-semibold text-[10px] text-indigo-600 dark:text-indigo-600">Home</p>
                    </div>
                  </Link>

                  <Link href="/activity">
                    <div className="cursor-pointer flex flex-col items-center space-y-1">
                      <div className="w-6 h-6  bg-indigo-300/70 rounded-md flex items-center justify-center ring-[3px] ring-indigo-500 transition-all">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6366f1" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                      </div>

                      <p className="font-inter font-semibold text-[10px] text-indigo-600 dark:text-indigo-600">Activity</p>
                    </div>
                  </Link>

                  <Link href="/notifications">
                    <div className="cursor-pointer flex flex-col items-center space-y-1">
                      <div className="w-6 h-6  bg-indigo-300/70 rounded-md flex items-center justify-center ring-[3px] ring-indigo-500 transition-all">

                        <BellAlertIcon className="w-4 h-4  text-indigo-500 " />
                      </div>
                      <p className="font-inter font-semibold text-[10px] text-indigo-600 dark:text-indigo-600">Notifications</p>
                    </div>
                  </Link>

                  <Link href="/settings">
                    <div className="cursor-pointer flex flex-col items-center space-y-1">
                      <div className="w-6 h-6  bg-indigo-300/70 rounded-md flex items-center justify-center ring-[3px] ring-indigo-500 transition-all">
                        <Cog6ToothIcon className="w-4 h-4  text-indigo-600 " />
                      </div>
                      <p className="font-inter font-semibold text-[10px] text-indigo-600 dark:text-indigo-600">Settings</p>
                    </div>
                  </Link>

                </div>

              </div>
            </div>
          </div>
        </>
      ) :
        <div className=' mx-auto mt-20 flex flex-col space-y-8 items-center justify-center'>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            You are not Autheticated. Please Login first.
          </p>
          <Link href="/login">
            <a

              className="w-40 text-center btn  bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80"
            >
              Login
            </a>
          </Link>
        </div>}
    </div>
  );
};

export default Layout;

//     const data = await DataStore.query(UserProfile, (c) =>
//       c.username("eq", username)
//     );

//     setUserInfo(data[0]);
