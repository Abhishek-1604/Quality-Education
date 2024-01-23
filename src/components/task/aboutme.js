import Img from "../task/Abhi.jpg"

export function Aboutmetaks(){
    return(
        <div class='container-fluid row'>
            <div class='col-5 m-5 text-end'>
                <img src={Img}style={{height:300}}/>
            </div>
            <div class='col-4 m-5'>
                <p>ABOUT ME</p>
                <h2>PERSONAL DETAILS</h2>
                <p>Hear, i focus on a range of items and features that we use in life without giving them a second  thought. such as COco Cola.Dolor sit amet, consecteur adipisicing elit, sed do eiusmod tempor incididunt ut labour et doloremagna aliqua. Ut enim ad minim veniam,quis nostrud exrcitation ullamco.</p>
                <button>VIEW FULL DETAILS</button>
            </div>
        </div>
    );
}