import Img from "../reusablebanners/img1.jpg"

export function Trustedbyourreusable(){
    const h11={
        fontFamily:"Arial Black"
    }
    const div1={
        backgroundColor:"#f5c97d",
        width:"100vw"
    }
    const img1={
            width:"100%"
            
            
            // width:300

    }
    return(
        <div class='container-fluid row 'style={div1}>
            <div class='col-4 m-5'>
                <h1 style={h11}>A COMPREHENSIVE TEACHING APPROACH</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
               <a href="">Learn More</a>
            </div>
            <div class='col-5  m-5 text-end'>
                <img src={Img}style={img1} />
            </div>
        </div>
    );
}