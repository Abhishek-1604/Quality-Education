import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faLaptopCode, faLaptopFile, faLaptopHouse, faLock, faMailBulk, faMailForward, faMailReplyAll, faRightLong, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons";


export function Login() {
    return (
        <div class="container-fluid row" style={{ backgroundColor:' purple' }}>

            <center>

                <div class=" bg-white container-fluid row " style={{ borderRadius: 60, marginTop:40,marginLeft:10,marginBottom:40,marginRight:10 }} >


                    <div class="col-4 p-5 m-5">
                        <FontAwesomeIcon icon={faLaptop} style={{ height: 100 }} />
                    </div>
                    
                    <div class="col-5 text-center">
                        <h1>Member Login</h1>
                        <br></br>
                        <div class="p-2" style={{ backgroundColor: 'lightgrey', borderRadius: 200 }}>
                            <FontAwesomeIcon icon={faEnvelope} />    <input type="email" placeholder="Email" style={{border:"none"}} />
                        </div><br></br>
                        <div class="p-2" style={{ backgroundColor: 'lightgrey', borderRadius: 200 }}>
                            <FontAwesomeIcon icon={faLock} />    <input type="password" placeholder="Password" style={{border:"none"}}/>
                        </div><br></br>
                        <div class="p-2" style={{ backgroundColor: 'green', borderRadius: 200 }}>
                            <button class="p-2 text-white" style={{ backgroundColor: 'green', borderRadius: 200 }}>LOGIN</button>
                        </div><br></br>

                        <p>Forgot <u class="text-success">USername / PAssword ?</u></p><br></br>
                        <p class="text-success">Creat your account<FontAwesomeIcon icon={faRightLong} /> </p>
                    </div>



                </div>
            </center>



        </div>


    );
}