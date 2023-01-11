import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import { Auth, DataStore } from 'aws-amplify';
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { NotificationListForUsers } from "../models";
import NotificationCard from '../components/NotificationCard';

const notifications = () => {

    const [user, setUser] = useState("");
    const [userAuthData, setUserAuthData] = useState("");

    const [allNotifications, setAllNotifications] = useState();
    const [userNotification, setUserNotification] = useState();
    const [refresh,setRefresh] =useState(false);


    useEffect(() => {

        const userAuth = async () => {
            const user = await Auth.currentAuthenticatedUser();

            const { username, attributes } = user;

            setUser(username);
            setUserAuthData(attributes);

            console.log("Username: ", user);
            console.log("Attributes: ", attributes);
            
        };


        const fetchAllNotifications = async () => {

            const allNotifications = await DataStore.query(NotificationListForUsers);
            console.log(allNotifications);
            setAllNotifications(allNotifications);
            setRefresh(true);
        };




        userAuth();
        fetchAllNotifications();
        handleFilterNotifications();
       
        

    }, [refresh]);

   
    const handleFilterNotifications = () => {
        const list = allNotifications?.filter(notification => notification.forUser === userAuthData?.email);
        console.log("Filtered List: ", list);
        setUserNotification(list);
        
    }

        

    




    return (
        <div className="flex flex-col items-center justify-center ">
            <Head>
                <title>Mobile GateGuard- Notifications</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>
            <Layout page="Notifications">
                <div className="flex flex-col space-y-6 items-center  px-2 pt-6 pb-4   h-[410px] overflow-scroll">
                    {/* <button  className="btn text-md bg-indigo-600 first-letter:hover:bg-opacity-70  ">
                        <ArrowPathIcon className=" w-6 h-6 md:w-8 md:h-8 text-indigo-200 dark:text-indigo-200 " />
                    </button> */}
                    {
                        userNotification?.map(notification => (
                            <NotificationCard key={notification.id} message={notification.message} date={notification.date} time={notification.time} />
                        ))
                    }

                </div>


            </Layout>

        </div>
    )
}

export default notifications