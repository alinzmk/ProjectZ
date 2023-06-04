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
                <h2>Welcome This is Your First Hint</h2>
                <p>Hints are important to get the story correctly and finish the game easier</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint4;