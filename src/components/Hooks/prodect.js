import React, { useEffect, useState } from "react";
import Img from "../Hooks/abhi.jpg"
import StarRatings from "react-star-ratings";

export function Productpage() {

    const [details, setDetails] = useState([])
    useEffect(() => {
      
        fetch("http://fakestoreapi.com/products")
            .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    })
    return (
        <>
        <div class='row '>
            {
                details.map((index) => (
                    <>


                        <div class="card " style={{ width: 300 }}>
                            <p class='card-id' style={{borderRadius:20,width:20,backgroundColor:"pink"}}>{index.id}</p>
                            <img src={index.image} style={{height:300}}/>
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body ">
                                <h5 class="card-title">{index.title} </h5>
                                <h6 class="card-text" style={{color:"blue"}}>{index.category } </h6>
                                <p class="card-text">{index.description} </p>
                                <p class="card-text"><StarRatings rating={index.rating.rate}
                                    starRatedColor="green"
                                    numberOfStars={5}
                                    starSpacing="2px"
                                    starDimension="20px"/> </p>
                                    <p class="card-text" style={{color:"darkred"}}>₹{index.price}<sup>00</sup></p>
                                {/* <p class="card-text">{index.place} </p> */}
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