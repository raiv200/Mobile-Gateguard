import Head from 'next/head'
import MobileLayout from '../components/MobileLayout'
import Link from 'next/link'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <Head>
        <title>Mobile GateGuard</title>
        <link rel="icon" href="/gateguard-logo.svg" />
      </Head>


      <MobileLayout>
        <div className="flex flex-col items-center px-3  ">
          <Logo size="M" />
          <div className="relative flex flex-col items-center space-y-10">
            <img className=' flex items-center object-cover -mt-2' src="./banner-mobile-gateguard.png" />
            <div className="absolute bottom-16 flex items-center justify-center space-x-3">
              <div className="flex bg-white h-[10px] w-[10px] rounded-full"></div>
              <div className="flex bg-white h-[10px] w-[10px] rounded-full"></div>
              <div className="flex bg-white h-[10px] w-[10px] rounded-full"></div>

            </div>
            <div className="flex items-center space-x-12">

              <Link href="/signup">
                <a>
                  <button className="btn text-md bg-indigo-200 text-indigo-500 hover:bg-opacity-80 shadow-2xl hover:shadow-indigo-500 hover:-translate-y-1">
                    Sign Up
                  </button>
                </a>
              </Link>
              <Link href="/login">
                <a>
                  <button className="btn text-md bg-indigo-600  text-indigo-100 hover:bg-opacity-70 hover:-translate-y-1 ">
                    Log In
                  </button>
                </a>
              </Link>
            </div>

          </div>

        </div>
      </MobileLayout>

    </div>
  )
};
