import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint5(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint5", "H9kP7tN3mZ");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>Ali Osman's Castle, Interesting</h2>
                <p>You should try L letter with sculptures, and check out ventilation tunnel</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint5;