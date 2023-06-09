import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/lara.png"

function Lara(){

    const localStorage = window.localStorage;
    localStorage.setItem("char3", "lara");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Lara Kurtoğlu</h2>
                <p class="storyParag">The daughter of Ali Osman, caught between loyalty to her father and a desire 
                to do what is right, who ultimately helps Alessandro bring her father to justice and find closure.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Lara;