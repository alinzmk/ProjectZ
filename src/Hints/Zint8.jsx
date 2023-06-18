import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/unknown.png"

function zHint8(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Nemes</h2>
                <p class="">The "nemes" symbol, the royal headdress of the pharaohs, represents power, authority, and divine rule.
</p>
            </div>
        </div>
    </div>

        </>
);
};

export default zHint8;