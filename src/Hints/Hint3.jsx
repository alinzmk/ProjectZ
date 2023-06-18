import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/brazil.png"

function Hint3(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint3", "b2Df5VcPmX");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h3>Oathkeeper's Heathmap</h3>
                <img src={pp} class="brazil-img"/>
                <h3>Hmm.. There is something unexpected things in Brazil?</h3>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint3;