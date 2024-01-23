import React from "react";
import "bootstrap/dist/css/bootstrap.css"


export function Tech(){
    const  div4={
    // backgroundcolor:'white',
    borderTop:'10px solid red',
    borderRadius:'20px'
    }
    const  div5={
    // backgroundcolor:'white',
    borderTop:'10px solid skyblue',
    borderRadius:'20px'
    }
    const  div6={
    // backgroundcolor:'white',
    borderTop:'10px solid green',
    borderRadius:'20px'
    }
    const  div7={
    // backgroundcolor:'white',
    borderTop:'10px solid orange',
    borderRadius:'20px'
    }
    const  div3={
    // backgroundcolor:'black'
    }
    return(
        
        <div class="container-fluid row ">
            <center><h1>Learn 4.0 Technologies</h1>
            <p>Get trained by alumni of BTs and top companies like Amazon,Microsoft,intel,Google,etc.. Learn directly from professional involved in product Development.</p>
            </center>
            <div class="container-fluid row">
                <div class='col-5 m-3 ' style={div3}>
                    <div class='p-2' style={div4}>
                    <h1>Data Scientist</h1>
                    <p>Data Scientist gather and analogical large sets of sturctured and efficent deals</p>
                    <div class='text-end'>
                    <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/76-512.png" style={{width:150,height:150 }}/>
                    </div>
                    </div>
                </div>
                <div class='col-5  m-3' style={div3}>
                    <div class='p-2' style={div5}>
                    <h1>NOT Developer</h1>
                    <p>Data Scientist gather and analogical large sets of sturctured and efficent deals</p>
                    <div class='text-end'>
                    <img src="https://th.bing.com/th/id/OIP.X4w__D1dhr5KimNZ-eK51wHaHa?rs=1&pid=ImgDetMain" style={{width:150,height:150 }}/>
                    </div>
                    </div>
                </div>
                <div class='col-5 m-3 ' style={div3}>
                    <div class='p-2' style={div6}>
                    <h1>VR Developer</h1>
                    <p>Data Scientist gather and analogical large sets of sturctured and efficent deals</p>
                    <div class='text-end'>
                    <img src="https://www.clipartkey.com/mpngs/m/300-3001409_graphic-ar-vr-game-development-ar-vr-technology.png" style={{width:150,height:150 }}/>
                    </div>
                    </div>
                </div>
                <div class='col-5 m-3 ' style={div3}>
                    <div class='p-2' style={div7}>
                    <h1>ML Engineer</h1>
                    <p>Data Scientist gather and analogical large sets of sturctured and efficent deals</p>
                    <div class='text-end'>
                    <img src="https://th.bing.com/th/id/OIP.4DgQPFJGQM0KbNoVEyB-pAHaHa?rs=1&pid=ImgDetMain" style={{width:150,height:150 }}/>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>


        
    );
}