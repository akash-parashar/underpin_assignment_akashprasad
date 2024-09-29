import Image from "next/image";
import React from "react";
import "./hompage.css"
import Header from "../components/Header";
// import LeftBar from "../components/LeftBar";
import Leftbar from "../components/leftbar/Leftbar";
import GameSection from "../components/gamesection/GameSection";

//ma



const HomePage = () => {
  return (
    <div className="main-hero-section" >
            <Header/>
        <GameSection/>    
    </div>
  );
};

export default HomePage;
