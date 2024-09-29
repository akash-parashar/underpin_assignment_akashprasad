import React from "react";
import sidebar from "./Component2.svg";
import viking from "./image32.png";
import frog from "./image33.png";
import monkey from "./image34.png";
import Image from "next/image";


const Leftbar = () => {
  return (
    <div className="text-white sm:mt-10 flex justify-start mt-28 sm:gap-10 gap-4">
      <Image
        src={sidebar}
        className=" lg:w-[160px] lg:h-[500px] md:h-[500px] sm:h-[440px] w-[100px]  h-[300px] "
        alt="sidebar"
      ></Image>
      <Image
        src={viking}
        className=" lg:w-[160px] md:w-[180px] sm:w-[160px] lg:h-[500px] md:h-[450px] sm:h-[400px] w-[100px]  h-[300px] "
        alt="sidebar"
      ></Image>
      <Image
        src={frog}
        className="block sm:hidden lg:w-[160px] md:w-[160px] sm:w-[160px] lg:h-[500px] md:h-[500px] sm:h-[440px] w-[100px]  h-[300px] "
        alt="sidebar"
      ></Image>
      {/* <Image
        src={monkey}
        className="block sm:hidden lg:w-[160px] md:w-[160px] sm:w-[160px] lg:h-[500px] md:h-[500px] sm:h-[440px] w-[100px]  h-[300px] "
        alt="sidebar"
      ></Image> */}
    </div>
  );
};

export default Leftbar;
