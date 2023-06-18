import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/levo.png"

function Levanja(){

    const localStorage = window.localStorage;
    localStorage.setItem("char3", "levanja");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Levanja Servidão</h2>
                <p class="storyParag">
                    Levanja Servidão is a respected headman in a Brazilian village, responsible for its governance. However, there exists an undisclosed tension between Levanja and Ali Osman. The source of their discord remains a mystery, leaving the community intrigued and speculating about the reason behind their strained relationship. Despite this, Levanja diligently fulfills his duties, ensuring the well-being and progress of the village. The unresolved conflict with Ali Osman adds an air of uncertainty and curiosity within the community.
                </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Levanja;