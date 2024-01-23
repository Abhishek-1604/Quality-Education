import React from 'react';
import Img from '../home/rcb-img.png';
import Img2 from '../home/csk-img.png';
import "bootstrap/dist/css/bootstrap.css"
export function Imgtask() {
    return (
        <>


            <center>

                <div className='container-fluid row text-center bg-dark '>

                    <h1 className='text-center text-white'>Super Over League</h1>
                    <div className='col-12 m-5 p-5'>
                        <img src={Img}></img>
                    
                        <img src={Img2}></img>
                    </div>
                </div>

            </center>

        </>
    )
}