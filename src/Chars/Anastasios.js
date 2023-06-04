import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/anastasios.png"

function Anastasios(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9">
                <h2>Tasos Mpakazetas</h2>
                <p>A former friend of Alessandro's father, haunted by the knowledge of the
                truth behind the murder and struggling to find a way to make amends for his past mistakes.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Anastasios;