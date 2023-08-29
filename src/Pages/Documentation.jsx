import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import PDF from "../Pages/THESISREPORT2.pdf";
import fileDownload from 'js-file-download'


function Documentation(){
    
    return (
        <>
        <Navbar/>
        <div class="container pt-5 documentation">
        <div class="row">
            <div class="col-lg-9">
                <h2>Documentation</h2>
                <div class="col-10 m-3">
                    <a href={PDF} target="_blank" rel="noreferrer"><button class="btn btn-lg btn-secondary me-4 mb-3">THESIS PDF</button></a>
                        <br></br>
                    <a target="_blank" href="https://ogralanyaedutr-my.sharepoint.com/:w:/g/personal/180254033_ogr_alanya_edu_tr/EX8fmsv2c5pLpoW0qYTxXnMBLfydEbkR4OX2MrxicsEwsA?e=38gvAH"><button class="btn btn-lg btn-secondary me-4 mb-3">Documentation</button></a>
                </div>
                <div class="col-10 m-3">
                </div>
                <div class="col-10 m-3">
                    <p>You can contact us for more details<button class="btn btn-dark m-3"><Link className="nav-link" to="/WhoAreWe">Who Are We</Link></button></p>
                </div>
            </div>
            
            
        </div>
    </div>
        <Footer/>
        </>
);
};

export default Documentation;