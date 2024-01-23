import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faChartPie, faCircleArrowLeft, faCircleChevronUp, faComputer, faComputerMouse, faHouseLaptop, faLaptop, faLaptopHouse, faLaptopMedical, faMobile, faPhotoFilm, faPieChart, faPizzaSlice, faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Icon } from "@fortawesome/fontawesome-svg-core";
// import "bootstrap/dist/js/bootstrap.js"
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import FontAwesome from "react-fontawesome";
import { faPhoenixFramework, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Myservicestask() {
    return (
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
    );
}