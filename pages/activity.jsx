import Head from 'next/head'
import React from 'react'
import Layout from './Layout'

const activity = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <Head>
                <title>Mobile GateGuard- Activity</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>
            <Layout page="Activity">
                <div className="flex flex-col space-y-8 items-center justify-center px-2 py-1  h-[410px]">
                    Activity
                </div>

            </Layout>

        </div>
    )
}

export default activity