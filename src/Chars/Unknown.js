import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/unknown.png"

function Unknown(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9">
                <h2>UNKNOWN</h2>
                <p>UNKNOWN</p>
            </div>
        </div>
        </div>

        </>
    );
};

export default Unknown;