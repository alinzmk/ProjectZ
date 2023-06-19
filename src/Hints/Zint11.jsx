import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/IEB.png"

function zHint10(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Ieb</h2>
                <p class="">The "ieb" symbol represents the eternal cycle of life and the balance of nature.</p>
            </div>
        </div>
    </div>
</>
);
};

export default zHint10;