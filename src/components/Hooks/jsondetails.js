import React, { useEffect, useState } from "react";
import Img from "../Hooks/abhi.jpg"

export function Jsondetails() {

    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/data.json")
        // fetch("http://fakestoreapi.com/products")
            .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    })
    return (
        <>
        <div class='row'>
            {
                details.map((index) => (
                    <>


                        <div class="card " style={{ width: 300 }}>
                            {/* <p class='card-id' style={{borderRadius:2000,backgroundColor:"pink"}}>{index.id}</p> */}
                            <img src={index.image} />
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body ">
                                <h5 class="card-title">{index.name} </h5>
                                <p class="card-text">{index.age} </p>
                                <p class="card-text">{index.place} </p>
                                <a href="#" class="btn btn-primary">View More</a>
                            </div>
                        </div>

                        {/* <p>{index.title}</p>

                <p>{index.id}</p> */}
                    </>
                ))
            }
            </div>
        </>
    );
}