import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { Auth } from "aws-amplify";
import ChangePasswordModal from '../components/ChangePasswordModal';

const settings = () => {

    const [user, setUser] = useState("");
    const [userAuthData, setUserAuthData] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);

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

    const handlePasswordModal = () => {
        setShowPasswordModal(!showPasswordModal);
    };

    const handleChangePassword = (oldPassword, newPassword) => {
        console.log("Password Changed");
        Auth.currentAuthenticatedUser()
            .then((user) => {
                return Auth.changePassword(user, oldPassword, newPassword);
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        setShowPasswordModal(!showPasswordModal);
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <Head>
                <title>Mobile GateGuard- Settings</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>
            <Layout page="Settings">
                <div className="flex flex-col  items-center justify-center  py-1  h-[410px]">
                    <div className=" flex flex-col w-[296px] rounded-2xl    transition duration-300 ease-in">
                        <div className="flex flex-col space-y-6 flex-1 px-8  ">
                        

                            <div className="flex flex-col space-y-3">
                                <label className="text-xs font-inter font-semibold text-gray-900 dark:text-gray-100  transition duration-300 ease-in">
                                    Your Email
                                </label>
                                <div className="group flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-100 px-2 py-2 rounded-lg  hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                                    <EnvelopeIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 transition duration-300 ease-in" />
                                    <input
                                        type="email"
                                        id="email"
                                        value={userAuthData.email}
                                        disabled={true}
                                        placeholder="example@gmail.com"
                                        className="pl-2 bg-indigo-100 dark:bg-transparent text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-500 font-inter focus:outline-none ml-2 w-full transition duration-300 ease-in"
                                    />
                                </div>
                            </div>



                            <div className="flex flex-col space-y-3 ">
                                <div className=" group flex justify-between items-center">
                                    <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                                        Your Password
                                    </label>
                                    {/* <button
                        onClick={handlePasswordModal}
                        className=" label bg-violet-200 dark:bg-indigo-600 text-xs px-3 uppercase py-1 font-inter font-bold text-indigo-600 dark:text-violet-200 shadow-md hover:shadow-2xl hover:opacity-80"
                      >
                        Change Password
                      </button> */}
                                </div>
                                <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-100 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                                    <LockClosedIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 transition duration-300 ease-in" />
                                    <input
                                        type="password"
                                        id="password"
                                        value="••••••••••••••••••••••••••"
                                        disabled={true}
                                        placeholder="Minimun 8 Characters"
                                        className="pl-2 bg-indigo-100 dark:bg-transparent text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-600 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handlePasswordModal}
                                type="submit"
                                className="w-full btn bg-indigo-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
                {showPasswordModal && (
                    <ChangePasswordModal
                        handlePasswordModal={handlePasswordModal}
                        handleChangePassword={handleChangePassword}
                    />
                )}

            </Layout>

        </div>
    )
}

export default settings