import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint2(){

    const localStorage = window.localStorage;
    localStorage.setItem("hint2", "G4fU5vN8cS");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>Welcome This is Your First Hint</h2>
                <p>As a child, our father's death was a mystery that consumed us. We were only nine years old when he was taken from us, and the pain of 
                    losing him was unbearable. As we grew older, we couldn't shake the feeling that his death was not just an accident. As an adult, we 
                    decided to investigate and find out the truth about what happened to our father. We dug up old police reports, interviewed witnesses, and 
                    chased down every lead. We were determined to find out who killed our father and bring them to justice. It was a long and difficult journey,
                    but in the end, we finally got the answers we were looking for and were able to find closure for ourselves and our family.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint2;