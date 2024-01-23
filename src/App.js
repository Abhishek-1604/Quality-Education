import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Hello } from './components/home/home';
import { Place } from './components/home/imgtask';
import { Card } from './components/home/congratscard';
import { Font } from './components/home/fontawesom';
import { Login } from './components/home/loginpage';
import { Tech } from './components/home/technologies';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/contact';
import Nopages from './components/pages/Nopages';
import { Imgtask } from './components/home/superover';
import { Social } from './components/home/socialbuttons';
import { Change } from './components/Hooks/usestate';
import { Fruit } from './components/Hooks/fruits';
import DateCalculator, { Days } from './components/Hooks/date';
import { Homepage, Homepagetask } from './components/task/homepage';
import { Aboutme, Aboutmetaks } from './components/task/aboutme';
import { Myservices, Myservicestask } from './components/task/offeredservices';
import { Jsondetails } from './components/Hooks/jsondetails';
import { Productpage } from './components/Hooks/prodect';
import { Navbar, Navbartask } from './components/task/navbar';
import { Programs, Programstask } from './components/task/programs';
import { Homepagereusable } from './components/reusablebanners/homepage';
import { Navbarreusable } from './components/reusablebanners/navbarbanner';
import { Aboutusreusable } from './components/reusablebanners/aboutus';
import { Programsreusable } from './components/reusablebanners/programs';
import { Essentialresuable } from './components/reusablebanners/essentialresources';
import { Ourpertnersresuable } from './components/reusablebanners/ourpertners';
import { Hoempagesmilestone } from './components/milestone/Homepage';
import { Footerreasuable } from './components/reusablebanners/footer';
import { LayoutTask } from './components/task/layout';
import { Navbartask1 } from './components/task/navbar1';
import { TeamWorkHomepage } from './components/teamwork/home';

import { QualityEducation } from './components/QualityEducation/QualityEducation';




function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <Hello/>
    <Place /> */}
      {/* <Card/> */}
      {/* <Font/>  */}
      {/* <Login/> */}
      {/* <Tech/> */}
    {/* <Change/> */}
    {/* <Fruit/> */}
{/* <Days/> */}
{/* <DateCalculator/> */}
{/* <Navbar/>
<Homepage/>
<Aboutme/>
<Programs/> */}
{/* <Navbarreusable/> */}
{/* <Homepagereusable/> */}
{/* <Footerreasuable/> */}
{/* <Hoempagesmilestone/> */}
{/* <Ourpertnersresuable/> */}
{/* <Essentialresuable/> */}
{/* <Aboutusreusable/> */}
{/* <Programsreusable/> */}
{/* <Myservices/>  */}
{/* <Jsondetails/> */}
{/* <Productpage/> */}
{/* <Navbartask/> */}
{/* {/* <Homepagetask/> */}
{/* <Navbartask1/>  */}
{/* <Aboutmetaks/> */}
{/* <Myservicestask/> */}
{/* <Programstask/> */}
{/* <LayoutTask/> */}
{/* <App/> */}
{/* <LoginEdu/> */}
{/* <Layout/> */}
{/* <HomeEdu/> */}
{/* <Hoempagesmilestone/> */}
{/* <TeamWorkHomepage/> */}
{/* <Homepagereusable/> */}
<QualityEducation/>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/home ' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
         
          <Route path='*' element={<Nopages />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Imgtask/> */}
      {/* <Social/> */}
    </>

  );
}

export default App;
