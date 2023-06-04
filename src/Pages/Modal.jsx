import {React, useRef, useState} from 'react';
import '../App.css';
import { Link, NavLink, useHistory, useNavigate} from 'react-router-dom';

const Modal = ({open,onClose}) => {

    const inputRef = useRef(null);
    const navigate = useNavigate(); 
    function handleClick() {
        let page = inputRef.current.value;
        navigate("/"+page);
        console.log(page)
    }
    
    
    if (!open) return null;

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e)=>{e.stopPropagation()}} class="modalContainer">
                    <button onClick={onClose} class="btn closeBtn">X</button>
                <div class="row">
                    <div className="col-12 justify-content-center d-flex">
                        <p>add hint code below</p>
                    </div>
                    <div className="col-12 justify-content-center d-flex">
                        <input ref={inputRef} type="text" id="message"
                            name="message"placeholder='enter here'/>
                    </div>
                    <div className="col-12 justify-content-center d-flex">
                        <button onClick={handleClick} class="btn btn-sm btn-secondary mt-3">add</button>
                    </div>
                </div>
            </div>
        </div>
    
    );
    };

export default Modal;