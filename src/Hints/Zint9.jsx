import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/AJET.png"

function zHint9(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Ajet</h2>
                <p class="">The "ajet" symbol, representing the headdress of the goddess Isis, signifies protection, power, and abundance.

</p>
            </div>
        </div>
    </div>

        </>
);
};

export default zHint9;