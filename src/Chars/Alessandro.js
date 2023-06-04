import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/alessandro.png"

function Alessandro(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9">
                <h2>Alessandro Soprano</h2>
                <p>A man with Italian heritage who grew up in Turkey, and after his father's murder
                became a private investigator driven by a desire for justice and a need to help others find closure.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Alessandro;