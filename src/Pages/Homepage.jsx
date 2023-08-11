import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

function Homepage(){
    return (
        <>
        <Navbar/>
        <div id="home-div" class="main-div row">
            <div class="row">
                <div class="col-12 header">
                    <h1>REVENGE OF DAGGER</h1>
                    <h2>FINAL GAME OF THIS JOURNEY</h2>
                </div>
            </div>
        </div>
        <div id="third-div" class="main-div row">
            <div class="col-6 m-auto text-center w-100 w-lg-10">
                    <h5 id="homeFirst">
                    Alessandro is a happy boy with his family, apologize he "was". 
                    <br></br> 
                    <hr class="w-50 mx-auto my-5"></hr>
                    After the day his father dies, years later Alessandro try to understand who killed his father and
                    most improtant why, in this adventure we try to take a big revenge.
                    </h5>
            </div>
        </div>

        <div id="second-div" class="main-div row">
            <div class="col-12 col-lg-6 my-0 text-center">
                <h3 class="">YOU CAN DOWLOAD OUR GAME HERE from ITHACI</h3>
                
                <button id="downloadBtn" class="btn btn-lg btn-danger m-auto mt-4">
                    Download
                </button>
            </div>
            <div class="col-12 col-lg-6 systemReq">
                <p class="ms-lg-5 ">
                    MINIMUM SYSTEM REQUIREMENTS :<br></br>
                    OS:Windows XP Service Pack 3, Windows Vista,7,8 (32bit/64bit) <br></br>
                    Processor:Dual core CPU: AMD Athlon64 X2 2.1 Ghz (4050+), Intel Core2 Duo 1.86 Ghz (E6300)<br></br>
                    Memory:1GB Memory (2GB on Vista)<br></br>

                    Graphics:DirectX 9 graphics card with 512Mb Video RAM: AMD Radeon HD 2600 XT, nVidia 8600<br></br>
                    DirectX®:9.0c<br></br>
                    Hard Drive:12 GB HD space<br></br>
                    Other Requirements:Broadband Internet connection<br></br>
                </p>
            </div>
        </div>
        <Footer/>
        </>
);
};

export default Homepage;