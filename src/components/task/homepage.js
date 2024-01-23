import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js"
import Img from "../task/Abhi.jpg"


export function Homepagetask(){
//    const div1={
//         backgroundImage:'url("https://thumbs.dreamstime.com/b/handsome-smiling-adult-man-casual-outfit-looking-left-promo-offer-standing-against-blue-background-267241267.jpg")',
//         // backgroundcolor:"blue",
//         // backgroundRepeat:"no-repeat",
//         width:"100%",
//         height:"100%"
//     }
    return(
        <>
        <div className="container-fluid row " style={{backgroundImage:'url("https://thumbs.dreamstime.com/b/handsome-smiling-adult-man-casual-outfit-looking-left-promo-offer-standing-against-blue-background-267241267.jpg")',backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            <div className="col-5 m-5 ">
                <p>THIS IS ME</p>
                <h1>ABHISHEK</h1>
                <h1 class="animate__animated animate__bounce">An animated element</h1>
                <div class="animate__animated animate__bounce animate__delay-2s">Example</div>
                
               
                <p>You will begin to realise why this exercise is called the Dickens Pattern with refernce to the ghost showing Scrooge some different futures.</p>
                <button>DISCOVER NOW</button>
            </div>
            <div className="col-5 m-5">
                {/* <img src={Img} style={{borderRadius:5000 ,height:200}}/> */}
            </div>
        </div>
        
        </>
    );
}