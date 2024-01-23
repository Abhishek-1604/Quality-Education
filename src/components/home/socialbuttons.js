import React from "react";
import "bootstrap/dist/css/bootstrap.css"

export function Social(){
    return(
<>
       <div class='container-fluid row text-center text-light' style={{backgroundImage:'url("https://th.bing.com/th/id/OIP.KNJv362C1Yo_Ck_162fmewHaEK?rs=1&pid=ImgDetMain")'}}>
        <h1 style={{fontFamily:'Arial Black',margin:10}}>Social Buttons</h1>
       <div class='p-2 m-2 text-center'>
       
           
        <button style={{borderRadius:10,backgroundColor:'orange'}}>Like</button>
            
       
        
        <button style={{borderRadius:10,margin:100}}>Comment</button>

    
       

        <button style={{borderRadius:10,backgroundColor:'blue'}}>Share</button>
        
      


       </div>
       </div>
</>
    );
}