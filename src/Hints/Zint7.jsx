import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/unknown.png"

function zHint7(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Kneph</h2>
                <p class="">Kneph symbolizing the creative power and spirit in ancient Egyptian mythology.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default zHint7;