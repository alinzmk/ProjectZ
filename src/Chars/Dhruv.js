import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/dhruv.png"

function Ettore(){

    const localStorage = window.localStorage;
    localStorage.setItem("char4", "dhruv");
    
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Dhruv</h2>
                <p class="storyParag">
Dhruv, an Indian homeless individual, remains a mysterious figure within his community. Even we do not know much thing about him. </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Ettore;