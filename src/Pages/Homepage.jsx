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
                <h3 class="">YOU CAN DOWLOAD OUR GAME HERE</h3>
                
                <iframe frameborder="0" src="https://itch.io/embed/2205237?linkback=true&amp;bg_color=000000&amp;fg_color=fff&amp;link_color=fff&amp;border_color=000" width="552" height="167"><a href="https://supplewaif7.itch.io/revengedaggergame">REVENGE: THE DAGGER by SuppleWaif7</a></iframe>
            </div>
            <div class="col-12 col-lg-6 systemReq">
                <p class="ms-lg-5 ">
                    MINIMUM SYSTEM REQUIREMENTS :<br></br>
                    OS:Windows 7 <br></br>
                    Processor:Dual core CPU: Intel i3 <br></br>
                    Memory:8GB RAM<br></br>
                    Graphics:DirectX 11 graphics card with 2GB Video RAM: nVidia 940m<br></br>
                    Hard Drive:4 GB HD space<br></br>
                    Other Requirements: Broadband Internet connection<br></br>
                </p>
            </div>
        </div>
        <Footer/>
        </>
);
};

export default Homepage;