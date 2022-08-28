import { getProviders, signIn } from "next-auth/react";
import React from "react";

import Head from "next/head";

function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Login - facebook(clone)</title>
        <meta
          name="google-site-verification"
          content="G7ytNgKJpYbuIlMLvcDW4lq9h1FZC6ez3XPjL2EgwSg"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      <div className="flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center bg-black">
        <img
          className="w-80"
          src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
          alt=""
        />

        <p className="font-xs text-white  mt-5">
          This is not a Real App it is Built for Educational Purposes only and
          all the rights reserved to Facebook(meta) @ 2022
        </p>

        <div className="mt-40 flex flex-col sm:flex-row sm:space-x-4">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="flex  p-3 bg-blue-500 mb-4 rounded-lg text-white"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign In With {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
