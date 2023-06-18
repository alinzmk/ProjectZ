import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint2(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint2", "G4fU5vN8cS");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>Here you again,</h2>
                <p>You can find the lighter near train. Good luck.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint2;