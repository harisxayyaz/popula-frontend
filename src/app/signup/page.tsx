import React from "react";
import { Unna } from "next/font/google";

const unna = Unna({
  subsets: ["latin"],
  weight: ["400", "700"], // Corrected property name
});

const Signup = () => {
  return (
    <main className="flex flex-col md:flex-row w-screen h-screen">
      <section className="md:w-[60%] md:h-full p-6 flex flex-col order-1 md:order-2">
        <div className="flex justify-end mb-6 pr-6">
          <p className="text-blue-500 cursor-pointer md:text-sm hover:text-blue-800 ">
            Already have an account? Sign in
          </p>
        </div>
        <div className="flex flex-col justify-center md:h-full h-[80vh] ">
          <div className="flex justify-center mb-6">
            <form className="space-y-6 w-full max-w-md">
              <div className={`${unna.className} `}>
                <h1 className=" text-4xl font-bold">
                  Create Your Free Account And Get Started!
                </h1>
              </div>
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full h-10 text-md px-2 text-black bg-transparent border border-purple rounded-md outline-none peer"
                />
                <label className="absolute top-1/2 left-1 text-sm text-black px-2 pointer-events-none transform -translate-y-1/2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:bg-white peer-valid:top-0 peer-valid:text-sm peer-valid:bg-white">
                  Username
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full h-10 text-md px-2 text-black bg-transparent border border-purple rounded-md outline-none peer"
                />
                <label className="absolute top-1/2 left-1 text-sm text-black px-2 pointer-events-none transform -translate-y-1/2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:bg-white peer-valid:top-0 peer-valid:text-sm peer-valid:bg-white">
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full h-10 text-md px-2 text-black bg-transparent border border-purple rounded-md outline-none peer"
                />
                <label className="absolute top-1/2 left-1 text-sm text-black px-2 pointer-events-none transform -translate-y-1/2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:bg-white peer-valid:top-0 peer-valid:text-sm peer-valid:bg-white">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full h-10 text-md px-2 text-black bg-transparent border border-purple rounded-md outline-none peer"
                />
                <label className="absolute top-1/2 left-1 text-sm text-black px-2 pointer-events-none transform -translate-y-1/2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:bg-white peer-valid:top-0 peer-valid:text-sm peer-valid:bg-white">
                  Confirm Password
                </label>
              </div>
              <div className="relative">
                <button
                  className="w-full h-10 bg-red-500 text-white rounded-md hover:bg-red-700 "
                  type="submit"
                >
                  Sign Up for free
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <h1 className="text-center text-sm mr-1">or sign in using</h1>
            <img src="google.svg" alt="google" className="h-5 w-5" />
          </div>
        </div>
      </section>
      <section
        className="flex flex-col gap-3 justify-center items-center md:h-full md:w-[40%] bg-[#270139] text-center md:text-left py-8 px-24 bg-cover bg-center order-2 md:order-1"
        style={{ backgroundImage: "url('/design.svg')" }}
      >
        <img src="whiteLogo.svg" alt="white logo" className="h-12" />
        <img src="user.png" alt="user photo" className="h-24 w-24" />
        <p className="text-white text-center">
          “POPULA provided exceptional service, exceeding my expectations and
          leaving me extremely satisfied.”
        </p>
        <p className="text-[#31A1A1] text-center tracking-widest ">
          ANTON VILLE | CEO, ADC PHARM.
        </p>
      </section>
    </main>
  );
};

export default Signup;
