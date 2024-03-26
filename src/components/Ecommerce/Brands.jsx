import React from "react";

// Assuming cn is a utility function you've defined for className concatenations.
// import { cn } from "utils";
// import { cn } from '../../lib/utils';



const logos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  // Add other logos as needed
];

const Brands = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many brands elevate their business.
        </p>

        <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <img
                src={logo.image}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white",
            // Assuming you have a way to apply the font styles directly or through CSS
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what Bird does for us.&quot;
        </div> */}

        <div className="items-center flex justify-center flex-col text-white">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="pt-2 xl:pt-0 w-10 xl:w-14"
          />

          <div className="text-center">
            <div className="text-sm font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
