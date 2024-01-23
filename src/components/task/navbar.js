import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive, faBoxes, faBoxesAlt, faMailBulk, faMailForward, faMattressPillow, faMicrophoneLinesSlash, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/js/bootstrap.js"

export function Navbartask(){
    return(

        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="col-3 m-1 p-1">
    <a class="navbar-brand" href="#"><img src="https://media.licdn.com/dms/image/C4D22AQF_LeuwHxmSSg/feedshare-shrink_800/0/1623462431935?e=2147483647&v=beta&t=jyy8xIqbJADmK3vxnWDjb5shrprnnIqTiLsQdh5bsn4"style={{width:100,height:50,borderRadius:200}}/></a>
</div>
<div class="col-5 m-2 p-2 text-end">

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