import { faChevronRight, faCircleChevronRight, faGreaterThan, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Essentialresuable() {
    return (

        <>
           <div class="container-fluid row" style={{ backgroundColor: "lightblue" }}>
                <div class="col-5 m-5">
                    <h1 style={{ fontFamily: "Arial Black" }}>ESSENTIAL RESSOURCES</h1>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.Integer efficitur tellus metus, sed feugiat leo posuere.</p>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10" >
                            <h2>First year students</h2>
                            <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.Morbi vitae tincidunt mi, et malesuada massa.</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-success " style={{ borderRadius: 100, width:70, height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    </div>
                    <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>

                        <div class="col-10">
                            <h2>Tuition & fees</h2>
                            <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.Morbi vitae tincidunt mi, et malesuada massa.</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-success " style={{ borderRadius: 100, width: 70, height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    </div>
                    <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        <div class="col-10">
                            <h2>International studies</h2>
                            <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.Morbi vitae tincidunt mi, et malesuada massa.</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-success" style={{ borderRadius: 100, width: 70, height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>


                    </div>
                    {/* </div> */}
                </div>
                <div class="col-5 m-5" >
                    <img src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
        </>
    );
}