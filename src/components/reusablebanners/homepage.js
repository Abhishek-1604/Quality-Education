import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { CSSTransition } from "react-transition-group";
import Img from "../reusablebanners/img1.jpg"
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive, faBoxes, faBoxesAlt, faClover, faGrinHearts, faHeartCircleBolt, faHeartCircleCheck, faHeartCircleExclamation, faHeartCirclePlus, faHeartCircleXmark, faHeartPulse, faHeartbeat, faMailBulk, faMailForward, faMattressPillow, faMicrophoneLinesSlash, faPlane, faRightLong, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleChevronRight, faGreaterThan, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";


export function Homepagereusable() {
   
    const style1 = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/handsome-young-curly-haired-man-working-laptop-computer-standing-isolated-white-wall_231208-1164.jpg")',
        // backgroundcolor:"blue",
        backgroundRepeat: "no-repeat",
        // width:"1000px",
        height: "800px",
        backgroundSize: "cover",
    }
    const style2 = {
        marginTop: "200px",
        marginLeft: "50px",
        // AnimationTimeline:"2s",

        // animationName: 'example',
        // animationDuration: '2s',
        // animationDelay: '2s',

    }
    // const button1 = {
    //     backgroundColor: "green",
    //     color: "white",
    //     padding: "10px"
    // }
    const h11 = {
        fontFamily: "Arial Black"
    }
    const h12 = {
        fontFamily: "Arial Black"
    }
    const div1 = {
        backgroundColor: "#f5c97d",
        width: "100vw",
        // height:"100vh"

    }
    const img1 = {
        width: "100%",
        //    margin:40,
        margin: 10,
        // marginRight:10
        // width: 300

    }
    // const div3 = {
    //     justifyContent: "center",
    //     width: "100%"
    // }
    // const img2 = {
    //     width: "100%",
    //     // margin:5,
    //     // marginRight:5

    // }
    const div2 = {
        border: "1px solid green",
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <div class="container-fluid">
                    <div class="col-3 m-1 p-1">
                        <a class="navbar-brand" href="#"><img src="https://media.licdn.com/dms/image/C4D22AQF_LeuwHxmSSg/feedshare-shrink_800/0/1623462431935?e=2147483647&v=beta&t=jyy8xIqbJADmK3vxnWDjb5shrprnnIqTiLsQdh5bsn4" style={{ width: 100, height: 50, borderRadius: 200 }} /></a>
                    </div>
                    {/* <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="http://localhost:3000/aboutus.js">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Programs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* // home page education and school  */}
            <div class="container-fluid row" style={style1}>
                <div class="col-5  text-light" style={style2}>
                    {/* <h6>QUALITY  EDUCATION</h6> */}
                    <h1 style={h11}>QUALITY  EDUCATION</h1>
                    <p>
                        Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</p>
                    {/* <button href="https://www.globalgoals.org/goals/4-quality-education/">Get Started Now</button> */}
                    <a href="https://www.globalgoals.org/goals/4-quality-education/">Learn More</a>
                </div>
            </div>




            {/* second page About us  */}
            <div class='container-fluid row ' style={div1}>
                <div class='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-5  m-4 text-end'>
                    <img src={Img} style={img1} />
                </div>
                <div class='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-5 m-5'>
                    <h1 style={h12}>ENSURE INCLUSIVE AND EQUITABLE QUALITY EDUCATION AND PROMOTE LIFELONG LEARNING OPPORTUNITIES FOR ALL.</h1>
                    <p>Education liberates the intellect, unlocks the imagination and is fundamental for self-respect. It is the key to prosperity and opens a world of opportunities, making it possible for each of us to contribute to a progressive, healthy society. Learning benefits every human being and should be available to all.</p>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                    <a href="">Learn More</a>
                </div>
            </div>



            {/* programs offered page  */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 class="text-center ">THE TARGETS</h1>
            <p class="text-center ">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus,<br></br> sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
            <br></br>
            <br></br>
            <br></br>
            {/* <div class="container-fluid row" style={{ justifyContent: "center", width: "100%" }}> */}

            {/* <div class="col-5 m-5 " style={{ border: "1px solid green" }}> */}
            {/* <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered ? 500 : 400, border: "1px solid green"  }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >
                        <img src="https://us.123rf.com/450wm/ashwin/ashwin1408/ashwin140800003/31059170-group-of-smiling-friends-isolated-on-white-background.jpg?ver=6" style={{ width: "100%", }}
                        />
        
                        <h2 style={{ color: "green" }}>FREE PRIMARY AND SECONDARY EDUCATION</h2>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="" style={{ color: "green" }}>Learn More</a>
                    

                </div> */}
            <div class="container-fluid row" >

                {/* <div class="col-5 m-5 " > */}
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_b8f666cb-30be-4dd5-8771-94fac8d9872b_goal_4.1_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">FREE PRIMARY AND SECONDARY EDUCATION</h5>
                        <p class="card-text">By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes.</p>
                    </div>



                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_8bf194f8-87a6-4161-931f-7f4091eb246e_goal_4.2_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">EQUAL ACCESS TO QUALITY PRE-PRIMARY EDUCATION</h5>
                        <p class="card-text">By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_00ebb6cc-3902-46e6-b335-5213e6b0b06d_goal_4.3_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">EQUAL ACCESS TO AFFORDABLE TECHNICAL, VOCATIONAL AND HIGHER EDUCATION</h5>
                        <p class="card-text">By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_a99f0803-ff88-4c57-a7af-4480e0e06cdd_goal_4.4_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">INCREASE THE NUMBER OF PEOPLE WITH RELEVANT SKILLS FOR FINANCIAL SUCCESS</h5>
                        <p class="card-text">By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_42069873-7331-4d32-9ae0-f86af6ebe63c_goal_4.5_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">ELIMINATE ALL DISCRIMINATION IN EDUCATION</h5>
                        <p class="card-text">By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_325cb279-f105-40bd-b3ef-da17fce5d3b6_goal_4.6_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">UNIVERSAL LITERACY AND NUMERACY</h5>
                        <p class="card-text">By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_737867a2-1db6-4fb1-80ab-cbdefb768e20_goal_4.7_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">
EDUCATION FOR SUSTAINABLE DEVELOPMENT AND GLOBAL CITIZENSHIP</h5>
                        <p class="card-text">By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_96d0bf4c-5d45-4c3d-8fff-e1df9c100f28_goal_4.a_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">BUILD AND UPGRADE INCLUSIVE AND SAFE SCHOOLS</h5>
                        <p class="card-text">Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all.</p>
                    </div>
                </div>
                <div class="card col-5 m-5 " style={{ width: 400 }}>
                    <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_1870159b-9f7a-4be8-a1fb-26f6e65fd9a7_goal_4.b_rgb_ng.svg" class="card-img-top" alt="..." style={{ width: "100%", height: 200 }} />
                    <div class="card-body">
                        <h5 class="card-title">EXPAND HIGHER EDUCATION SCHOLARSHIPS FOR DEVELOPING COUNTRIES</h5>
                        <p class="card-text">By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries.</p>
                    </div>
                </div>
            </div>
            {/* <div class="col-5 m-5 " style={{ border: "1px solid green" }}> */}
            {/* <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered1 ? 500 : 400, border: "1px solid green" }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyHHXAPdpOiPARDnH0Ud4DA2x7jPLCKxFTxi2kbWjRqpqyVs4N8EXJZ9dGqfwDRTw1_0&usqp=CAU" style={{ width: "100%", }}
                    />



                    <h2 style={{ color: "green" }}>Faculty of Arts</h2>
                    <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                    <a href="" style={{ color: "green" }}>Learn More</a>


                </div> */}
            {/* </div> */}


            {/* essential resources */}
            <div class="container-fluid row" style={{ backgroundColor: "lightblue" }}>
                <div class="col-10 col-md-10 col-lg-10 col-xl-5 m-5 ">
                    <h1 style={{ fontFamily: "Arial Black" }}>THINGS TO DO</h1>
                    
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Find a Goal 4 charity you want to support. Any donation, big or small, can make a difference!</p>
                        </div>
                       
                    </div>
                    <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Donate your used books. The easiest way to give access to knowledge is to donate your used books to someone.</p>
                        </div>
                    </div>
                       <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Promote and take free online courses. In a digital world, there are more opportunities to get access to education than just go to university.</p>
                        </div>
                    </div>
                       <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Visit your local school and ask what school supplies they need. Start a school supply drive in your community.</p>
                        </div>
                    </div>
                       <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Mentor young people. You can provide tutoring and homework assistance, teach a language or deliver a lesson on the Global Goals.</p>
                        </div>
                    </div>
                       <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid green" }}>
                        {/* <div class="col-7"> */}
                        <div class="col-10 " >
                           
                            <p>Stay informed. Follow your local news and stay in touch with the Global Goals online </p>
                        </div>
                    </div>
                       <br></br>
                    
                    
                    {/* </div> */}
                </div>
                <div class="col-10 col-md-10 col-lg-10 col-xl-5 m-5" >
                    <img src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>


            {/* Top stories */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <br></br>
            <div class="container-fluid row">
                <div class="col-6 ">
                    <h1 style={{ fontFamily: "Arial Black" }}>TOP STORIES</h1>
                </div>
                <div class="col-6 text-end" style={{ justifyContent: "end" }}>
                    <a href="">Learn More</a>
                </div>
            </div>
            <div class="container-fluid row " style={{ justifyContent: "center" }}>


                <div class="col-10 col-md-4 m-5">
                    <img src="https://www.achievers.com/wp-content/uploads/2020/05/05-27-20-2.jpg" style={{ width: "100%", height: "100%", }} />
                    <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>
                </div>
                <div class="col-10 col-md-4 m-5">
                    <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/g2rc9tyxy0atuujywb0iog.jpg" style={{ width: "100%", height: "100%", }} />
                    <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>
                </div>
                <div class="col-10 col-md-4 m-5">
                    <img src="https://cdn.elearningindustry.com/wp-content/uploads/2022/09/8-Practical-Ways-To-Improve-Employee-Performance.jpg" style={{ width: "100%", height: "100%", }} />
                    <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>
                </div>
            </div>
            <br></br> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>


            {/* OUR PRETRAINERS */}

            <div class='container-fluid row text-light ' style={{ backgroundColor: "lightpink" }}>
                <div class='col-10 col-md-10 col-lg-10 col-xl-5 m-5 text-end' style={{ backgroundColor: "lightpink" }}>
                    <img src={Img} style={img1} />
                </div>
                <div class='col-10 col-md-10 col-lg-10 col-xl-5 m-5' style={{ backgroundColor: "green" }}>
                    <h1 style={h11}>TRUSTED BY OVER
                        <br></br> 6000+ STUDENTS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                    <a href="">Join Now</a>
                </div>
            </div>


            {/* footer section */}


            <div class="container-fluid row bg-secondary text-light" style={{ justifyContent: "center" }} >
                <div class="col-2 col-md-2 m-5">
                    <h1>Quick Links</h1>
                    <p>Work</p>
                    <p>Services</p>
                    <p>Products</p>
                    <p>Tips & Tricks</p>
                </div>
                <div class="col-2 col-md-2 m-5">
                    <h1>Programs</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div>
                <div class="col-2 col-md-2  m-5">
                    <h1>Resouces</h1>
                    <p>FAQ</p>
                    <p>Submit Ticket</p>
                    <p>Contact Us</p>

                </div>
                <div class="col-5 col-md-2  m-5">
                    <h1>Newsletters</h1>
                    <p>Subscribe newsletter to get updates.</p>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        <input type="email " class=" " placeholder="Enter your email" />
                        <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="container-fluid row">
                        <div class="col-1">
                            <a class="m-2" href="https://www.facebook.com/abhi.akki.1257?mibextid=ZbWKwL" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2" href="https://instagram.com/abhi_6w071?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2" href="https://www.linkedin.com/in/abhishek-p-42891626a" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>


                    </div>
                </div>

            </div>




        </>
    );
}