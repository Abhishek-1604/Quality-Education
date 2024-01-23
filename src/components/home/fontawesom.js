import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash, faCircle, faCircleCheck, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBed, faBellConcierge, faCheck, faCircleExclamation, faCompactDisc, faDiceOne, faListCheck, faTicket, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FontAwesome from "react-fontawesome";
 import { FontAwesomeFlip } from "react-fontawesome";


export function Font(){

return(


<>
<div class="container-fluid row">
   <center> <h1>Notifications</h1>

<div class="col-5 p-5 m-5 text-white bg-primary" >
<FontAwesomeIcon icon={faCircleCheck}style={{height:20}}  />   Information Message
</div>
<div class="col-5 p-5 m-5 text-white bg-success" >
<FontAwesomeIcon icon={faCircleCheck} style={{height:20}} />   Success Message
</div>
<div class="col-5 p-5 m-5 text-white bg-warning" >
<FontAwesomeIcon icon={faBell}style={{height:20}} />   Warning Message
</div>
<div class="col-5 p-5 m-5 text-white bg-danger" >
<FontAwesomeIcon icon={faCircleExclamation}style={{height:20}} />   Error Message
</div>
</center>

</div>

</>

);

}