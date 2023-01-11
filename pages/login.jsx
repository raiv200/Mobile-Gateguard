import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import Head from "next/head";
import MobileLayout from "../components/MobileLayout";


const login = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async () => {
        if (!username || !password) {
            return;
        }
        try {
            const user = await Auth.signIn(username, password);
            console.log("User Data After Login", user);

            router.push("/app");
        } catch (error) {
            console.log("error signing in", error);

            router.push('/error');
        }

        console.log("Signed In Successfully!!");
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-gray-50 z-10 overflow-hidden">
            {/* Login Form   */}
            <Head>
                <title>Login -Mobile GateGuard</title>
                <link rel="icon" href="/gateguard-logo.svg" />
            </Head>
            <MobileLayout>

                <Login
                    username={username}
                    password={password}
                    handleSignIn={handleSignIn}
                    handleUsername={handleUsername}
                    handlePassword={handlePassword}
                />
            </MobileLayout>
        </div>
    );
};

export default login;