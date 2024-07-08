import React from "react";

const Signup = () => {
  return (
    <main className="flex flex-col md:flex-row w-screen h-screen">
      <section className="md:w-[60%] md:h-full  p-6 flex flex-col order-1 md:order-2">
        <div className="flex justify-center sm:items-center md:justify-end mb-6 ">
          <p className="text-blue-500 cursor-pointer">
            Already have an account? Sign in
          </p>
        </div>
        <div className="flex flex-col justify-center md:h-full ">
          <div className="flex justify-center mb-6">
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </div>
          <div className="flex justify-center mb-6">
            <form className="space-y-6 w-full max-w-md">
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
                  className="w-full h-10 bg-red-500 text-white rounded-md"
                  type="submit"
                >
                  Sign Up for free
                </button>
              </div>
            </form>
          </div>
          <h1 className="text-center mt-4">or sign in using google</h1>
        </div>
      </section>

      <section
        className="flex flex-col gap-3 justify-center items-center md:h-full md:w-[40%] bg-[#270139] text-center md:text-left py-8 px-24 bg-cover bg-center order-2 md:order-1"
        style={{ backgroundImage: "url('/design.svg')" }}
      >
        <img src="user.png" alt="user photo" className="h-24 w-24" />
        <p className="text-white text-center">
          “POPULA provided exceptional service, exceeding my expectations and
          leaving me extremely satisfied.”
        </p>
        <p className="text-[#31A1A1] text-center">
          ANTON VILLE | CEO, ADC PHARM.
        </p>
      </section>
    </main>
  );
};

export default Signup;
