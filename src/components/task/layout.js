import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Img from "../task/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCamera, faComputer, faMobile, faPhotoFilm, faPieChart, faRocket } from "@fortawesome/free-solid-svg-icons";

export function LayoutTask() {
    return (

        <>
            {/* navbar  starts*/}
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <div class="col-3 m-1 p-1 text-light">
                        {/* <a class="navbar-brand" href="#"><img src="https://media.licdn.com/dms/image/C4D22AQF_LeuwHxmSSg/feedshare-shrink_800/0/1623462431935?e=2147483647&v=beta&t=jyy8xIqbJADmK3vxnWDjb5shrprnnIqTiLsQdh5bsn4" style={{ width: 100, height: 50, borderRadius: 200 }} /></a> */}
                    <h6><k class="text-success">UNIVERSITY</k> <br></br>Of Bangaluru</h6>
                    </div>
                    {/* <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse " id="navbarNav">
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
                    </div> */}
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="col-3 m-1 p-1">
                        <a class="navbar-brand" href="#"><img src="https://media.licdn.com/dms/image/C4D22AQF_LeuwHxmSSg/feedshare-shrink_800/0/1623462431935?e=2147483647&v=beta&t=jyy8xIqbJADmK3vxnWDjb5shrprnnIqTiLsQdh5bsn4" style={{ width: 100, height: 50, borderRadius: 200 }} /></a>
                    </div>
                    <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

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
            {/* navbar end  */}

            {/* Homepage  start */}
            <div className="container-fluid row " style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/handsome-smiling-adult-man-casual-outfit-looking-left-promo-offer-standing-against-blue-background-267241267.jpg")', width: "100%", height: "100%" }}>
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

            {/*Home page   end  */}


            {/* About me start  */}


            <div class='container-fluid row'>
                <div class='col-5 m-5 text-end'>
                    <img src={Img} style={{ height: 300 }} />
                </div>
                <div class='col-4 m-5'>
                    <p>ABOUT ME</p>
                    <h2>PERSONAL DETAILS</h2>
                    <p>Hear, i focus on a range of items and features that we use in life without giving them a second  thought. such as COco Cola.Dolor sit amet, consecteur adipisicing elit, sed do eiusmod tempor incididunt ut labour et doloremagna aliqua. Ut enim ad minim veniam,quis nostrud exrcitation ullamco.</p>
                    <button>VIEW FULL DETAILS</button>
                </div>
            </div>


            {/* about me  ends */}


            {/* offeredservices starts  */}

            <div class="container-fluid row text-center">
                <h1>My Offered Services</h1>
                <p>At about this time of a year, some months after New Year's resolving have been made and kept, or made and nergiected</p>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faPieChart} style={{ height: 100, width: 200 }} />
                    <h1>Web Design</h1>
                    <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faComputer} style={{ height: 100, width: 200 }} />
                    <h1>Web Development</h1>
                    <p>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faCamera} style={{ height: 100, width: 200 }} />
                    <h1>Photography</h1>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faPhotoFilm} style={{ height: 100, width: 200 }} />
                    <h1>Clipping Path</h1>
                    <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faMobile} style={{ height: 100, width: 200 }} />
                    <h1>Apps Interface</h1>
                    <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faRocket} style={{ height: 100, width: 200 }} />
                    <h1>Graphic Design</h1>
                    <p>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
                </div>

            </div>

            {/* offeredservices  ends  */}

            {/* programs starts  */}
            <div class="row m-1">
                <div class="card m-1" style={{ width: 400 }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card m-1" style={{ width: 400 }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>


            {/* programs ends  */}


        </>
    );
} 