import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/aliosman.png"

function AliOsman(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9">
                <h2>Ali Osman Kurtoğlu </h2>
                <p>A ruthless Turkish mobster responsible for the murder of Alessandro's 
                father, feared by many and determined to maintain his grip on the criminal underworld at any cost.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default AliOsman;