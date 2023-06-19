import React, { useRef, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../App.css';
import alessandroPhoto from "../images/alessandro.png";
import anastasiosPhoto from "../images/ibo2.png";
import unknownPhoto from "../images/unknown.png";
import laraPhoto from "../images/levo.png";
import michaelPhoto from "../images/ettore.png";
import aliosmanPhoto from "../images/aliosman.png";
import dhruvPhoto from "../images/dhruv.png";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "./Modal";

var c1 = "/Alessandro"; var c2 = "/Unknown"; var c3 = "/Unknown"; var c4 = "/Unknown"; var c5 = "/Unknown"; var c6 = "/Unknown";
var p1 = alessandroPhoto; var p2 = unknownPhoto; var p3 = unknownPhoto; var p4 = unknownPhoto; var p5 = unknownPhoto; var p6 = unknownPhoto;


function ImageShow(){
    var paragArray = [];
    for(let i=0;i<5;i++){
        const charCode = ["ettore", "abraham", "levanja", "dhruv", "aliosman"];
        const x = localStorage.getItem("char"+(i+1));
        if(charCode[i] === x){
            if(i==0){
                p2 = michaelPhoto; c2 = "/Ettore-M5sCp";
            }
            else if(i==1){ 
                p3 = anastasiosPhoto; c3 = "/Abraham-b7HkP";
            }
            else if(i==2){
                p4 = laraPhoto; c4 = "/Levanja-G4tE9";
            }
            else if(i==4){
                p5 = aliosmanPhoto; c5 = "/AliOsman-2nL1f";
            }
            else if(i==3){
                p6 = dhruvPhoto; c6 = "/Dhruv-3t5aq";
            }
        }    
    }
    return paragArray
}

function Story(){

    const [openModal, setModalOpen] = useState(false);
    

    const myElementRef1 = useRef(null);
    const myElementRef2 = useRef(null);
    const myElementRef3 = useRef(null);
    const myElementRef4 = useRef(null);
    const myElementRef5 = useRef(null);
    ImageShow();

    useEffect(() => {

        const myElement1 = myElementRef1.current;
        const myElement2 = myElementRef2.current;
        const myElement3 = myElementRef3.current;
        const myElement4 = myElementRef4.current;
        const myElement5 = myElementRef5.current;
        const elementArray = [myElement1, myElement2, myElement3, myElement4, myElement5]

        for (let index = 0; index < 5; index++) {
            const hint = localStorage.getItem("hint"+(index+1)); 
            console.log(hint)
            if(hint){
                elementArray[index].classList.remove('d-none');
            }
        }
    }, []);

/*    useEffect(() => {
        
        var visibleParags = ImageShow();
        const myElement1 = myElementRef1.current;
        const myElement2 = myElementRef2.current;
        const myElement3 = myElementRef3.current;
        const elementArray = [myElement1, myElement2, myElement3]
        console.log(visibleParags)
        for (let index = 0; index < (visibleParags.length); index++) {
            if (elementArray[index]) {
                const hasClass = elementArray[index].classList.contains('d-none');
                if (hasClass) {
                    elementArray[index].classList.remove('d-none');
                    console.log('Removed d-none class');
                }
            }
        }
    }, []); */
    
    
    return (
        <>
        <Navbar/>
        <div id="story">
        <Modal open={openModal} onClose={()=>setModalOpen(false)}/>
        <div class="container m-auto mt-lg-5 my-5 pt-lg-5">
    <div class="row">
        <h3>It is Soprano, Alessandro Soprano</h3>
    </div>
    <div class="row">
        <p class="storyParag">
            Memories of a once happy family flood my thoughts. We cherished our lives in Italy, bound together by a deep love for our father, an esteemed archaeologist and academic in the best universities in the world. However, our world shattered when he was mercilessly killed by desert bandits ”as we know”, leaving behind a void that could never be filled. I always wonder why…         </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 2</p>
        <p ref={myElementRef1} id="parag2" class="d-none storyParag">
            In my childhood, someday I introduced to Ali Osman, a close friend of our father's. Through him, we discovered that our father had an office in New York—a place we yearned to visit, hoping to uncover more about his mysterious life and untimely demise of my father.        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 3</p>
        <p ref={myElementRef2} id="parag3" class="storyParag  d-none">
            Arriving in New York, we were met with chaos as we found ourselves caught in the midst of a fierce battle between the police and the M.O.B. Determined to reach our father's office, we navigated the perilous streets, driven by the burning desire for answers.        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 4</p>
        <p ref={myElementRef3} id="parag4" class="storyParag  d-none">
            Within our father's office, we unearthed a profound revelation—he had been working on excavations at the Egyptian Pyramids. More shockingly, we learned that Ali Osman, once considered a friend, was responsible for our father's murder. The thirst for vengeance consumed us, but first, we needed to obtain an ancient dagger, a key to unlocking the truth.        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 5</p>
        <p ref={myElementRef4} id="parag4" class="storyParag  d-none">
            Armed with the dagger and an energy map leading us to Brazil, our hearts raced with anticipation. We embarked on a journey to uncover the depths of Ali Osman's secrets. The energy within the dagger pulsated, revealing that Brazil held the answers we sought.
        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 5</p>
        <p ref={myElementRef5} id="parag4" class="storyParag  d-none">
            Our quest led us to a castle in the heart of Brazil, said to be Ali Osman's stronghold. With determination burning in our veins, we ventured into the depths of a dark cave, ready to confront the challenges that lay ahead. Zombies and soldiers stood in our path, testing our strength and resolve, but our sights remained fixed on our ultimate goal—retribution against Ali Osman.
        </p>
    </div>
</div>
    <div class="container pb-5">
        <div class="row m-auto p-lg-3 justify-content-center">
            <div class="col-6 col-lg-2 pb-5">
                <Link id="1" className="nav-link" to={c1}><img src={p1} class="char-img"/></Link>
            </div>
            <div class="col-6 col-lg-2 pb-5">
                <Link className="nav-link" to={c2} ><img src={p2} class="char-img"/></Link>
            </div>
            <div class="col-6 col-lg-2 pb-5">
                <Link className="nav-link" to={c3} ><img src={p3} class="char-img"/></Link>
            </div>
            <div class="col-6 col-lg-2 pb-5">
                <Link className="nav-link" to={c4} ><img src={p4} class="char-img"/></Link>
            </div>
            <div class="col-6 col-lg-2 pb-5">
                <Link className="nav-link" to={c6} ><img src={p6} class="char-img"/></Link>
            </div>
            <div class="col-6 col-lg-2 pb-5">
                <Link className="nav-link" to={c5} ><img src={p5} class="char-img"/></Link>
            </div>
        </div>
        <div class="col-12 mb-5 m-auto justify-content-center">
            <h6 class="text-center m-3">Did you play game more and cannot see other characters and story?<br></br> 
            Enter the hint or character codes and see full content.</h6>
            <div class="d-flex m-auto">
                <button class="btn m-auto btn-secondary"onClick={()=>setModalOpen(true)} >ADD CODE</button>
            </div>
        </div>
    </div>
    </div>
    
    <Footer/>
    </>
    
);

};

export default Story;