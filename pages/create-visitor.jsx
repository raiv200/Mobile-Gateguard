import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import { AtSymbolIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { Auth, DataStore } from "aws-amplify";
import { Visitor } from "../models";

const CreateVisitor = () => {

    const [user, setUser] = useState("");
    const [userAuthData, setUserAuthData] = useState("");

    const [visitorName, setVisitorName] = useState("");
    const [visitorPhoneNumber, setVisitorPhoneNumber] = useState("");
    const [visitorType, setVisitorType] = useState("");
    const [expectedDate, setExpectedDate] = useState("");
    const [expectedTime, setExpectedTime] = useState("");
    const [approvalStatus, setApprovalStatus] = useState("");
    const [verifyStatus, setVeriftStatus] = useState("Not Verified");
    const [verificationCode, setVerificationCode] = useState("");


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



    const handleCreateVisitor = async () => {
        console.log("Visitor Created !!");

        const newVisitor = {

            visitorName: visitorName,
            memberPhoneNumber: visitorPhoneNumber,
            visitorType: visitorType,
            expectedDate: expectedDate,
            expectedTime: expectedTime,
            allowedBy: user,
            approvalStatus: approvalStatus,
            verifyStatus: verifyStatus,
            code: verificationCode,

        };

        await DataStore.save(
            new Visitor(newVisitor)
        );

        console.log("New Visitor",newVisitor);


        setVisitorName("");
        setVisitorPhoneNumber("");
        setVisitorType("");
        setExpectedDate("");
        setExpectedTime("");
        setApprovalStatus("");
        setVerificationCode("");


    };

    const handleCreateOTP = () => {
        const code = Math.floor(100000 + Math.random() * 900000);
        console.log(code);
        setVerificationCode(code.toString());
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <Head>
                <title>Mobile GateGuard- Create Visitot</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>
            <Layout page="Create Visitor">


                <div className="relative flex flex-col mt-4 bg-gray-50  dark:bg-gray-900 z-10 overflow-y-scroll h-[396px] ">

                    <div className="pt-4 flex flex-col  rounded-2xl z-20 mx-auto mt-2 pb-2 w-[290px] ">

                        <div className="flex flex-col space-y-3 flex-1 px-5 py-4 pt-6 ">

                            <div className="flex flex-col ">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="visitorName"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Visitor Name
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="text"
                                            id="visitorName"
                                            value={visitorName}
                                            onChange={(e) => setVisitorName(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="visitorPhoneNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Visitor Phone Number
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="text"
                                            id="visitorPhoneNumber"
                                            value={visitorPhoneNumber}
                                            onChange={(e) => setVisitorPhoneNumber(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="visitorType"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Visitor Type
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="text"
                                            id="visitorType"
                                            value={visitorType}
                                            onChange={(e) => setVisitorType(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="expectedDate"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Expected Date
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="date"
                                            id="expectedDate"
                                            value={expectedDate}
                                            onChange={(e) => setExpectedDate(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>




                                <div className="flex flex-col">
                                    <label
                                        htmlFor="expectedTime"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Expected Time
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="time"
                                            id="expectedTime"
                                            value={expectedTime}
                                            onChange={(e) => setExpectedTime(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>


                                <div className="flex flex-col">
                                    <label
                                        htmlFor="approvalStatus"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Approval Status
                                    </label>
                                    <div className="relative mb-4">

                                        <input
                                            type="text"
                                            id="approvalStatus"
                                            value={approvalStatus}
                                            onChange={(e) => setApprovalStatus(e.target.value)}
                                            className="w-full pl-3 p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500"
                                            placeholder=" "
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleCreateOTP}
                                    type="submit"
                                    className="w-full btn bg-indigo-600 px-5 py-3 text-white  hover:shadow-2xl hover:opacity-80 "
                                >
                                    Generate OTP Code
                                </button>

                                {(verificationCode !== null) && (<div className="mt-3 mx-auto text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">

                                    <p className="flex  text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">
                                        OTP Code:
                                        <span className=" ml-2 bg-indigo-600 px-1 py-0.5 text-xs rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
                                            #{verificationCode}
                                        </span>
                                    </p>

                                </div>
                                )}

                            </div>

                            <button
                                onClick={handleCreateVisitor}
                                type="submit"
                                className="w-full btn bg-indigo-600 px-5 py-3 text-white  hover:shadow-2xl hover:opacity-80 "
                            >
                                Create Visitor
                            </button>


                        </div>


                    </div>
                    {/* Bg Cover */}
                    {/* <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div> */}
                </div>
            </Layout>
        </div>
    )
}

export default CreateVisitor