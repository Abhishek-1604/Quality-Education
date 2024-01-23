import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faReacteurope, faRendact } from "@fortawesome/free-brands-svg-icons";



export function TeamWorkHomepage() {

    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(120)
    return (



        <>
            <div class="container-fluid row">
                <div class="card m-1" style={{ width: 300 }}>
                    <img src="https://th.bing.com/th/id/OIP.mdG75L7-kF--odmreC29WAHaFj?rs=1&pid=ImgDetMain" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Chicken Biryani</h5>
                        <p> <b>₹120 /-</b><sub><del>150</del></sub></p>
                        <p class="card-text"></p>
                        <a href="#" class="btn text-success" > <button class="btn btn-outline-danger" onClick={() => setCount(count - 1, count <= 1)}> - </button> add <button class="btn btn-outline-danger" onClick={() => setCount(count + 1)}>+ </button> {count}</a>
                        {/* <FontAwesomeIcon icon={faRendact}/> */}
                    </div>
                </div>

            </div>

        </>
    );
}