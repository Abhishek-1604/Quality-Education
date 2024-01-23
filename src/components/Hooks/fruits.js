import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"


export function Fruit() {
    // const [color,setColor]=useState(["Blue","Orange"])
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return (
        
            <div class='container-fluid row text-center m-1 p-2 bg-warning'>
                <div class=' col-10 container-fluid row text-center bg-white' style={{ marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10 ,borderRadius:20}}>
                    <h1 >Bob ate <b style={{ color: 'yellow' }}>{count}</b>  mangoes  <b style={{ color: 'yellow' }}>{count1}</b>  Bananas</h1>
                    <div class="col-4 m-5 p-1">
                        <img src="https://th.bing.com/th/id/OIP.62JpdImaEJ428L1GdqFITwHaHa?rs=1&pid=ImgDetMain" style={{ height: 200, width: 200 }} /><br></br>
                        <button type="button" style={{ backgroundColor: 'pink', borderRadius: 20 }} onClick={() => setCount(count + 1)}>Increment</button>

                    </div>
                    <div class="col-4 m-5 p-1" >
                        <img src="https://hotemoji.com/images/dl/6/banana-emoji-by-google.png" style={{ height: 200, width: 200 }} /><br></br>
                        <button type="button" style={{ backgroundColor: 'pink', borderRadius: 20 }} onClick={() => setCount1(count1 + 1)}>Increment</button>

                    </div>

                </div>
            </div>


        
    )
}