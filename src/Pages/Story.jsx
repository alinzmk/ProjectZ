import React, { useRef, useEffect, useState } from "react";
import { NavLink , useHistory , Link} from "react-router-dom";
import '../App.css';
import alessandroPhoto from "../images/alessandro.png";
import anastasiosPhoto from "../images/anastasios.png";
import unknownPhoto from "../images/unknown.png";
import laraPhoto from "../images/lara.png";
import michaelPhoto from "../images/michael.png";
import aliosmanPhoto from "../images/aliosman.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "./Modal";

var c1 = "/ProjectZ/Story/Alessandro"; var c2 = "/ProjectZ/story/unknown"; var c3 = "/story/unknown"; var c4 = "/story/unknown"; var c5 = "/story/unknown";
var p1 = alessandroPhoto; var p2 = unknownPhoto; var p3 = unknownPhoto; var p4 = unknownPhoto; var p5 = unknownPhoto;
const hintCode = ["n7YJ9KdPmX", "G4fU5vN8cS", "b2Df5VcPmX", "L6rM2nT8jW"];


function ImageShow(){
    var paragArray = [];
    for(let i=0;i<5;i++){
        var x = localStorage.getItem("hint"+(i+1));
        if(hintCode[i] === x){
            if(i==0){
                p2 = michaelPhoto; c2 = "/Story/Michael";  paragArray.push(i)
            }
            else if(i==1){ 
                p3 = anastasiosPhoto; c3 = "/Story/Anastasios"; paragArray.push(i)
            }
            else if(i==2){
                p4 = laraPhoto; c4 = "/Story/Lara"; paragArray.push(i)
            }
            else if(i==3){
                p5 = aliosmanPhoto; c5 = "/Story/AliOsman"; paragArray.push(i)
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
    ImageShow();
    useEffect(() => {
        
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
    }, []);
    
    
    
    
    return (
        <>
        <Navbar/>
        <div id="story">
        <Modal open={openModal} onClose={()=>setModalOpen(false)}/>
        <div class="container m-auto mt-lg-5 my-5">
    <div class="row">
        <h6>My name is Alessandro, Alessandro Soprano</h6>
    </div>
    <div class="row">
        <p class="storyParag">
            I had a beautiful family, but everything changed in an instant when my father was killed while we were on our way to a
            picnic. It was a day that should have been filled with laughter and joy, but instead, it was the day that our lives were
            forever changed. The loss of my father left a gaping hole in my heart and in the life of my family. We were never able
            to fully recover from the tragedy and the memory of that day still haunts us. Despite the tragedy and the loss, I will
            always cherish the memories of the happy times my family shared before that fateful day.
        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 2</p>
        <p ref={myElementRef1} id="parag2" class="d-none storyParag">
            As a child, our father's death was a mystery that consumed us. We were only nine years old when he was taken from us,
            and the pain of losing him was unbearable. As we grew older, we couldn't shake the feeling that his death was not just
            an accident. As an adult, we decided to investigate and find out the truth about what happened to our father. We dug up
            old police reports, interviewed witnesses, and chased down every lead. We were determined to find out who killed our
            father and bring them to justice. It was a long and difficult journey, but in the end, we finally got the answers we
            were looking for and were able to find closure for ourselves and our family.
        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 3</p>
        <p ref={myElementRef2} id="parag3" class="storyParag  d-none">
            I always suspected that my father's death was not an accident, and I was filled with a need for answers. As I
            investigated, I discovered that my father's best friend was the one who killed him. I was shocked and devastated by this
            revelation. The betrayal was unfathomable, my father's best friend took him away from me and my family. I couldn't
            believe that someone who was so close to my father could do something like this. It was a difficult and painful journey,
            but I was able to find closure knowing the truth about my father's death and the person responsible for it.
        </p>
    </div>
    <div class="row">
        <p className="d-none">Paragraph 4</p>
        <p ref={myElementRef3} id="parag4" class="storyParag  d-none">
            I was consumed with anger and a desire for revenge when I found out that my father had been murdered by his best friend.
            I spent every waking moment thinking about the person who took him away from me and my family. I knew that I couldn't
            rest until I had taken my revenge. I made it my life's mission to track down my father's murderer and make them pay for
            what they had done. I gathered evidence, planned every detail, and waited for the perfect opportunity to strike. It was
            a long and difficult journey, but finally, the moment of reckoning arrived, and I was able to take my revenge on the
            person who had killed my father. It brought me some closure, but the pain of losing my father will stay with me forever.
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
                <Link className="nav-link" to={c5} ><img src={p5} class="char-img"/></Link>
            </div>
        </div>
        <div class="col-12 mb-5 m-auto justify-content-center">
            <h6 class="text-center m-3">Did you play game more and cannot see other characters? Enter the hint codes and see full content.</h6>
            <div class="d-flex m-auto">
                <button class="btn m-auto btn-secondary"onClick={()=>setModalOpen(true)} >ADD HINT CODE</button>
            </div>
        </div>
    </div>
    </div>
    
    <Footer/>
    </>
    
);

};

export default Story;