import "bootstrap/dist/css/bootstrap.css";
import { useState} from "react";
// import "bootstrap/dist/js/bootstrap.js"

export function Programsreusable() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    
     

    

    return (

        <>
 <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 class="text-center ">PROGRAMS WE OFFERS</h1>
            <p class="text-center ">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus,<br></br> sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-fluid row" style={{justifyContent:"center",width:"100%"}}>
            
                {/* <div class="col-5 m-5 " style={{ border: "1px solid green" }}> */}
                    <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered ? 500 : 400, border: "1px solid green"  }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >
                        <img src="https://us.123rf.com/450wm/ashwin/ashwin1408/ashwin140800003/31059170-group-of-smiling-friends-isolated-on-white-background.jpg?ver=6" style={{ width: "100%", }}
                        />
        
                        <h2 style={{ color: "green" }}>Faculty of Science</h2>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a class="div" href="" style={{ color: "green" }}>Learn More</a>
                    

                </div>
                {/* <div class="col-5 m-5 " style={{ border: "1px solid green" }}> */}
                    <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered1 ? 500 : 400, border: "1px solid green"}}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)} >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyHHXAPdpOiPARDnH0Ud4DA2x7jPLCKxFTxi2kbWjRqpqyVs4N8EXJZ9dGqfwDRTw1_0&usqp=CAU" style={{ width: "100%", }}
                        />
                   

             
                        <h2 style={{ color: "green" }}>Faculty of Arts</h2>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="" style={{ color: "green" }}>Learn More</a>
                  

            </div>
            </div>


        </>
    );
}