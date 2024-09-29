import React from "react";
import compound from "../../../public/bronze_frame_with_bronze_crown.svg";
import group184 from "../../../public/Group184.svg";
import ranolph from "../../../public/ranophlogo.svg";
import screeSize from "../../../public/GroupSize186.svg";
import Hamburger from "../../../public/GroupHamburger185.svg";
import Image from "next/image";

const Header = () => {
  return (
    <nav>
      <div className="w-full h-20 sm:h-32 flex justify-between items-center p-3 ">
        <div className="flex gap-10">
          <Image src={compound} alt="nig" className="hidden sm:block md:w-[70px] lg:w-[91px] sm:w-[50px]" />
          <Image src={group184} alt="coin image" className="lg:w-[218px] sm:w-[140px] md:w-[150px] w-[100px]"></Image>
        </div>

        <div className="logo mr-0 md:mr-5 md:flex md:w-[300px] lg:w-[400px] sm:mr-20 sm:w-[300px] w-[200px]  ">
          <Image
            src={ranolph}
            className=" w-auto sm:min-w-full"
            alt="nig"
          ></Image>
        </div>
        <div className="sidebars flex lg:gap-10 md:gap-7 sm:gap-6">
          <Image src={screeSize} alt="nig" className="hidden sm:block lg:w-[64px] sm:w-[40px] w-[30px]  md:w-[50px]" ></Image>
          <Image src={Hamburger} alt="nig" className="lg:w-[64px] sm:w-[40px] w-[30px]  md:w-[50px] ">
          </Image>
        </div>
      </div>
    </nav>
  );
};

export default Header;
