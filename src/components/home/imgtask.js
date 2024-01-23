import React from "react";
import Img from "../home/img1.jpg"
import Img1 from "../home/img1.jpg"
import "bootstrap/dist/css/bootstrap.css";

export function Place(){
    return(
        <div class="container-fluid row bg-dark p-5 text-center text-white  " >
            <h1>Beautiful Girl</h1>
            <div class="">
            <img src={Img}/><br></br><br></br>
            
            <img src={Img1}/>
            </div>
        </div>
    );

}