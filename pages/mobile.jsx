import Head from 'next/head'
import Layout from './Layout'
import {UsersIcon,CubeIcon,WrenchScrewdriverIcon} from "@heroicons/react/solid";
import { AiFillCar } from "react-icons/ai";

const Mobile = () => {
    return (
        <div className="flex min-h-full flex-col items-center justify-center py-2">
            <Head>
                <title>Mobile GateGuard</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>


            <Layout>

               

                 <div className="flex items-center px-3 py-3 border-2 border-red-400 ">
                    
                </div>  
                
            </Layout>

        </div>
    )
};

export default Mobile;