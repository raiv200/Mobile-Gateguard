import Head from 'next/head'
import Layout from './Layout'
import { UsersIcon, CubeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { AiFillCar } from "react-icons/ai";
import Card from "../components/Card";
import Link from 'next/link';

const Mobile = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <Head>
                <title>Mobile GateGuard</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>


            <Layout page="GateGuard">

                <div className="flex flex-col space-y-8 items-center justify-center px-2 py-1  h-[410px]">
                    <div className='flex items-center justify-between w-full  px-2'>
                       
                            <Card data="Guest" icon={<UsersIcon />} link="create-visitor" />
                       
                        <Card data="Delivery" icon={<CubeIcon />} />
                    </div>

                    <div className='flex items-center justify-between w-full pb-2 px-2'>
                        <Card data="Car" icon={<AiFillCar size="52px" />} />
                        <Card data="Daily Helper" icon={<WrenchScrewdriverIcon />} />
                    </div>

                </div>

            </Layout>

        </div>
    )
};

export default Mobile;