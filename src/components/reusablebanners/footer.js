import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";


export function Footerreasuable(){
    return (
        <>
        <div class="container-fluid row bg-secondary text-light" style={{justifyContent:"center"}} >
                <div class="col-2 col-md-2 m-5">
                    <h1>Quick Links</h1>
                    <p>Work</p>
                    <p>Services</p>
                    <p>Products</p>
                    <p>Tips & Tricks</p>
                </div>
                <div class="col-2 col-md-2 m-5">
                    <h1>Programs</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div>
                <div class="col-2 col-md-2  m-5">
                    <h1>Resouces</h1>
                    <p>FAQ</p>
                    <p>Submit Ticket</p>
                    <p>Contact Us</p>

                </div>
                <div class="col-5 col-md-2  m-5">
                    <h1>Newsletters</h1>
                    <p>Subscribe newsletter to get updates.</p>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        <input type="email " class=" " placeholder="Enter your email" />
                        <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="container-fluid row">
                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>


                    </div>
                </div>
                <center>
                    <hr></hr>
                    <p>Copyright ©2023 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeartCircleCheck} style={{ color: "green" }} /> by <p1 style={{ color: "green" }}> Colorlib</p1></p>
                </center>
            </div>
        </>
    );
}