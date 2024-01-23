import { Outlet, Link } from "react-router-dom";
import Img from "../pages/img1.jpg"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"


const Layout = () => {
    const abhi={
        // borderRadius:'50%',
        // margin:"10px",
    
        
    }
    return (
        <>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
            <div class='container-fluid row bg-secondary p-2'style={{width:"100%"}}>

               

                <div class='col-1'>
                    <Link to="/Home">Home</Link>
                </div>


                <div class='col-1'>
                    <Link to="/Blogs">Blogs</Link>
                </div>

                <div class='col-1'>
                    <Link to="/contact">Contact</Link>
                </div>


                <div class='col-1'>
                    <Link to="/Nopages">Nopages</Link>
                </div>

            </div>

            <div class='container-fluid row'>

                <div class='col-3 m-5 p-5'>
                    <h1 style={{color:"red"}}>JENNY</h1>
                    <h2>FUll STACK DEVELOPMENT</h2>
                    <p>KGISL Micro College </p>
                    <p>Banglore,Karnataka</p>
                </div>
                <div class='col-3 m-5 '>
                    <img src={Img} style={abhi}/>
                </div>
            </div>



            <Outlet />
        </>
    )
};


export default Layout;