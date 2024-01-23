import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive, faBoxes, faBoxesAlt, faMailBulk, faMailForward, faMattressPillow, faMicrophoneLinesSlash, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/js/bootstrap.js"

export function Navbartask1(){
    return(

        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
    <div class="col-3 m-1 p-1">
    <a class="navbar-brand" href="#"><h1  class="text-light">colorlib<b class="text-success">.</b></h1></a>
</div>
    <div class="col-2 m-1 p-1">
    <button class="bg-dark"> + PERSONAL</button>
</div>
<div class="col-3 m-2 p-2 text-end">

    <a class="m-1" style={{color:"darkblue",justifyContent:"end"}} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
    <a class="m-1" style={{color:"blue"}} href=""><FontAwesomeIcon icon={faTwitter}/></a>
    <a class="m-1"  href=""><FontAwesomeIcon icon={faLinkedin}/></a>
    <a class=" m-1 text-danger" style={{borderRadius:10,}} href=""><FontAwesomeIcon icon={faYoutube}/></a>
    <a class="m-1 text-danger "  href=""><FontAwesomeIcon icon={faInstagram}/></a>

    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
} 