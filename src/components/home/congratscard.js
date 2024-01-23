import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Img from "../home/abhi.jpg";
import Img from "../home/abhi.jpg";
import Img1 from "../home/watch.png";


export function Card() {
    return (
        <div style={{ backgroundImage: 'url("https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png")' }}>
            <center><h1>aom</h1>
           <div class=" text-center bg-info col-5 ">
            <div calss="">
            <img src={Img} style={{borderRadius:500, width:200}}/>
            <h2>Abhishek P</h2>
            <p>I'm From World Famouse Mango City Srinivaspur</p>
            <img src={Img1}/>
           </div>

           </div>
    
        </center>
        </div>
    );

}