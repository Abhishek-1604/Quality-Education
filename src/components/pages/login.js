import { Outlet,Link } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAnchorCircleExclamation, faCircleArrowRight, faCircleChevronRight, faHeart, faPaperPlane, faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBowlFood, faCamera, faCloudSunRain, faComputer, faHouseFloodWater, faMobile, faPeopleGroup, faPhotoFilm, faPieChart, faPlateWheat, faRocket, faSadCry } from "@fortawesome/free-solid-svg-icons";
import { faAngry, faCalendar } from "@fortawesome/free-regular-svg-icons";
 const Layout=()=>{
    const bg1={
        backgroundImage:'url("data:image/jpeg;base64,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")',
        width:'100%',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'Cover'
    }
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
        
                       <div style={bg1}>
        <nav class="navbar navbar-expand-xl navbar-dark bg-light">
            <div class="container-fluid ">
                <a class="navbar-brand text-dark" href="#"><img 
                src="https://th.bing.com/th/id/OIP.IDqj9hlNxfadyXI4drYRqAHaFI?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{height: 50}}/> <FontAwesomeIcon icon={faCalendar} style={{direction:'rtl',textAlign:'left'}} /></a>
                <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-dark"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                        <    Link to="/home" style={{color:"black", textDecoration:"none"}} className="m-5 p-3">Home</Link>                  </li>
                  <li class="nav-item">
                   <Link to="/contact" className="m-5 p-3" style={{color:"black", textDecoration:"none"}}>Contact Us</Link>
                  </li>
                  <li class="nav-item">
                   <Link to="/blog" className="m-5 p-3" style={{color:"black", textDecoration:"none"}}>Blog</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="*" className="m-5 p-3" style={{color:"black", textDecoration:"none"}}>Nopages</Link>                  </li>
                </ul>
              </div>
              <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div>
            </div>  
            </nav>
            
           

        <Outlet/>
        
      <center> 
        <div class="container row text-center text-light " >
        <div class="col-lg-6 p-5 text-start"> 
         
         <h1>Hunger</h1>
         <p>Addressing hunger requires a comprehensive approach considering the various factors contributing to the problem. We can work towards a world free of hunger through targeted interventions and investments in agriculture, sustainable food systems, and vulnerable populations.</p>
         <button class="btn btn-success" href="https://en.wikipedia.org/wiki/Wikipedia" style={{background:'linear-gradient(90deg, skyblue, lightgreen)',border:'none',width:100}}>View More</button>

     </div>
        <div class="col-lg-6">
         {/* <img src="https://th.bing.com/th/id/OIP.189z4DQ4exIBWjpUB013GgHaNP?w=115&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" class="col-lg-6 container-fluid"/> */}
        </div>
        </div></center> 
        </div>
        <div class="container-fluid row text-center">
                <h1>Problems Facing In Hunger</h1>
                <p>At about this time of a year, some months after New Year's resolving have been made and kept, or made and nergiected</p>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faHouseFloodWater} style={{ height: 100, width: 200 }} />
                    <h1>What is World Hunger?</h1>
                    <p>World hunger refers to the chronic and widespread lack of access to enough nutritious food among populations worldwide. It is a complex problem that affects people of all ages and genders.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faBowlFood} style={{ height: 100, width: 200 }} />
                    <h1>The Scope of World Hunger</h1>
                    <p>World hunger affects hundreds of millions of people in different regions, with sub-Saharan Africa and South Asia being the most affected areas</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faPlateWheat} style={{ height: 100, width: 200 }} />
                    <h1>What are the Causes of World Hunger?</h1>
                    <p>According to the United Nations, “Hunger is increasing in many countries where economic growth is lagging, particularly in middle-income countries .</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faCloudSunRain} style={{ height: 100, width: 200 }} />
                    <h1>Climate Change and Environmental Degradation</h1>
                    <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faAngry} style={{ height: 100, width: 200 }} />
                    <h1>Conflict and Displacement</h1>
                    <p>Climate change and environmental degradation, including deforestation and soil degradation, significantly impact food production and availability</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faSadCry} style={{ height: 100, width: 200 }} />
                    <h1>Economic Factors</h1>
                    <p>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
                </div>

            </div>
            <div class="container-fluid row bg-white">

                <div class="container-fluid row">
                    <h2 class="text-center text-dark m-5"> Soving hunger problems</h2>
                    <p class="text-dark text-center " >Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa</p>
                </div>
            </div>

            <div class="container-fluid row text-center" >
                <div class="card col- 4 md-3 m-4 " style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="data:image/jpeg;base64,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"
                        class="card-img-top" alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title text-secondary">1. Break the Cycle of Conflict and Hunger</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: 600 }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD03i9Fn2cKyqJDNgOmO-eCcYA4X6iSYZ2NLtddtfMWjTfdEwufBnwcR4gVWYTH_ETNJs&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Increase Sustainability and Build Resilience to Climate Change</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: 600 }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYWKTJZVW2tNcMqJqZoX-aWXT36VzQ5x99Q&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Address Poverty & Inequality Through Social Safety Nets</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: 600 }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe1bNY4V1Pq1zwEPVk400CDIyn27iUGC5bvkA-hyKIFhf8Xcb272A4XVOxHgnr_F1M_E&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Help Rural Farmers Connect to Markets</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid row" style={{ backgroundColor: "lightgrey" }} >
                <div class="container-fluid  text-center col-5 m-4 p-5  ">
                    <h2 class="text-dark">Related Examples in India</h2>
                    <p class="text-secondary text-center">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
                        Integer efficitur tellus metus, sed feugiat leo posuere.</p>

                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">First state is Bihar</h1>
                        <p href="#" class="card-text" >Bihar is among the poorest states in the country with a very high incidence of poverty. Although in recent years it has witnessed a high rate of growth,.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Second Jharkand</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body m-2 p-4 " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Third Chhattisgarh</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>

                </div>
                <div class="  container-fluid  text-center m-5 p-5 col-5 ">
                    <img class="img-fluid" src="https://cdn.downtoearth.org.in/library/medium/2023-10-16/0.97054700_1697448185_untitled-2.jpg" style={{ height: 500, width: 700 }} />

                </div>
            </div>
        </>
    );
 }
 export default Layout;