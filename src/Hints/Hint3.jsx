import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint3(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint3", "b2Df5VcPmX");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>Welcome This is Your Third Hint</h2>
                <p>Hints are important to get the story correctly and finish the game easier</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint3;