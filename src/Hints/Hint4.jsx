import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint4(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint4", "L6rM2nT8jW");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>Welcome to Brazil, not yet Californicated </h2>
                <p>You cannot enter "THE CAVE" with car</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint4;