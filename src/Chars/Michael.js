import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/michael.png"

function Michael(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9">
                <h2>Michael Soprano </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially
                unchanged. It was popularised in</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Michael;