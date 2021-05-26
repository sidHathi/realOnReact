/**
 * home.js
 * 
 * JSX element class that exports a react component containing the
 * website's home page.
 * 
 * Siddharth Hathi, REAL, May 2021
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import nasa from '../assets/nasa.png';
import dart from '../assets/dart.png';
import jhu from '../assets/jhu.png';
import msu from '../assets/msu.png';
import bhu from '../assets/bu.png';
import {openingAnimation, goalsAnimations, goalsAnimationsM, handleNavTransparent} from '../animations/animations';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


class Home extends React.Component {

    // Activates animations library when page loads
    componentDidMount(){
        openingAnimation();
        goalsAnimations();
        goalsAnimationsM();
        handleNavTransparent();
    }

    // JSX html document for the page
    render(){
        return (
            <div>
                <section className="landing">
                <div className="openingImage">
                    <div className="darken">
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-6">
                            <div className="openingText container-fluid">
                                <h3>
                                <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                                    <defs>
                                    <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                        <stop offset={0} stopColor="#ff7f00" />
                                        <stop offset={1} stopColor="red" stopOpacity="0.702" />
                                    </linearGradient>
                                    </defs>
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                                </svg>
                                Relatavistic Electron Atmospheric Loss                                  
                                </h3>
                                <h1>REAL</h1>
                                <p>
                                <br />
                                High-precision analysis of electron loss <br />from Earth’s Van Allen radiation belt.
                                </p>
                                <a className="button" href="#overview">
                                LEARN MORE
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4" />
                        </div>
                        <div className="featuredContent">
                            <div className="row">
                                <div className="col-7"></div>
                                <div className="col-3">
                                    <div className="articlePreview">
                                        <p className="headline text-right">March 2021</p>
                                        <h3 class="text-right">Firefly Aerospace and Exolaunch 
                                                            Announce Launch Services Agreement</h3>
                                        <a href="#news" className="articleLinkAlt text-right">Read more </a>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <h3>Share</h3><br />
                                    <div className="sharethis-inline-share-buttons"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className="sponsors">
                <div className="greyBanner">
                    
                    <div className="row">
                    <div className="centerContent">
                        <h3>
                        <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                            <defs>
                            <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset={0} stopColor="#ff7f00" />
                                <stop offset={1} stopColor="red" stopOpacity="0.702" />
                            </linearGradient>
                            </defs>
                            <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                        </svg>
                        Sponsored By                                  
                        </h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-10">
                        <div className="customContainer">
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="row justify-content-centerCol">
                                <div className="col">
                                <img src={nasa} className="schoolLogo nasa" />
                                </div>
                                <div className="col">
                                <img src={dart} className="schoolLogo" />
                                </div>
                                <div className="col">
                                <img src={jhu} className="schoolLogo" />     
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="row justify-content-center">
                                <div className="col">
                                <img src={msu} className="schoolLogo" />  
                                </div>
                                <div className="col">
                                <img src={bhu} className="schoolLogo" />  
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-2" />
                    </div>
                </div>
                </section>
                <section id="overview">
                <div className="row">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                    <div className="mainTextBlock container">
                        <h3>
                        <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                            <defs>
                            <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset={0} stopColor="#ff7f00" />
                                <stop offset={1} stopColor="red" stopOpacity="0.702" />
                            </linearGradient>
                            </defs>
                            <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                        </svg>
                        THE PROJECT                                
                        </h3>
                        <h2>
                        Overview
                        </h2>
                        <p>
                        REAL is a multi-university research project that aims to learn more about
                        the dynamics of  high-energy electrons in Earth’s Van Allen
                        radiation belt. The REAL satellite will include a custom particle instrument capable of making precise
                        and high time resolution measurements of electrons across a vast energy
                        scale. 
                        </p>
                        <a className="link" href="mission">Learn more</a>
                    </div>
                    </div>
                    <div className="col-lg-3" />
                </div>
                </section>
                <section id="goals" className="noMobile">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="secondaryTextBlock">
                        <p> REAL’s satellite will be the first to conduct 
                            pitch-angle resolved measurements at high time resolution (~50 ms). It’s sensors are also novel 
                        in their ability to mesure electrons over a wide energy range (100 eV - 2 MeV).
                        </p>
                        <a href="tech" className="link">Learn more</a>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="switchingImage">
                        <div className="semiDarken">
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="secondaryTextBlock">
                        <p> The data collected by REAL will help us better understand
                        electron dynamics in Earth’s Van Allen Radiation belts. Specifically, 
                        REAL will reveal the processes that scatter high energy electrons into Earth’s atmosphere.
                        </p>
                        <a className="link" href="science">Learn more</a>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="switchingImage2">
                        <div className="semiDarken">
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="goalsMoblile" className="onlyMobile">
                    <div className="row">
                        <div className="mobileHalfBlock">
                        <div className="switchingImgMobile">
                            <div className="semiDarken" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobileHalfBlock">
                        <div className="centerMobile">
                            <div className="container">
                            <p> REAL’s satellite will be the first to conduct 
                                pitch-angle resolved measurements at high time resolution (~50 ms).
                                It’s sensors are also novel 
                            in their ability to mesure electrons over a wide energy range (100 eV - 2 MeV).
                            
                            </p>
                            <a href="tech" className="link">Learn more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobileHalfBlock">
                        <div className="switchingImgMobile2">
                            <div className="semiDarken" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobileHalfBlock">
                        <div className="centerMobile">
                            <div className="container">
                            <p> The data collected by REAL will help us better understand
                            electron dynamics in Earth’s Van Allen Radiation belts. Specifically, 
                            REAL will reveal the processes that scatter high energy electrons into Earth’s atmosphere.
                            </p>
                            <a className="link" href="science">Learn more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section id="numbers">
                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                        <div className="borderRight" />
                        </div>
                        <div className="col-10 no-gutters">
                        <div className>
                            <br /><br />
                            <h3>
                            <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                                <defs>
                                <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset={0} stopColor="#ff7f00" />
                                    <stop offset={1} stopColor="red" stopOpacity="0.702" />
                                </linearGradient>
                                </defs>
                                <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                            </svg>
                            NUMBERS                               
                            </h3>
                        </div>
                        </div>
                        <div className="col-1 no-gutters">
                        <div className="borderLeft" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                        <div className="borderRight borderTop borderBottom" />
                        </div>
                        <div className="col-10 no-gutters">
                        <div className="borderTop borderBottom numbersContent">
                            <div className="row rowSpacing">
                            <div className="col-lg-6">
                                <h3 className="text-right">HIGH-RESOLUTION</h3>
                                <h1 className="secondary text-right">50 ms</h1>
                            </div>
                            <div className="col-lg-1" />
                            <div className="col-lg-5">
                                <br />
                                <p className="small textSwitch">REAL is the first satellite mission to measure the angular 
                                distribution of electrons fast enough to resolve electron microbursts, an important loss 
                                mechanism for radiation belt electrons. The measurements will reveal non-linear effects of 
                                plasma wave-particle interactions in space.</p>
                            </div>
                            </div>
                            <div className="row rowSpacing">
                            <div className="col-lg-6">
                                <h3 className="text-right">MEASUREMENT RANGE</h3>
                                <h1 className="secondary text-right">100 eV -<br></br> 2 MeV</h1>
                            </div>
                            <div className="col-lg-1" />
                            <div className="col-lg-5">
                                <br />
                                <p className="small textSwitch">With its three sensor heads, REAL is the first mission 
                                to measure radiation belt electron precipitation across the full energy range. A novel miniaturized
                                 electrostatic analyzer enables measurements of electron precipitation down to much lower energies than 
                                 other radiation belt missions.</p>
                            </div>
                            </div>
                            <div className="row rowSpacing">
                            <div className="col-lg-6">
                                <h3 className="text-right">MISSION DURATION</h3>
                                <h1 className="secondary text-right">180 days</h1>
                            </div>
                            <div className="col-lg-1" />
                            <div className="col-lg-5">
                                <br />
                                <p className="small textSwitch">REAL will meet its primary mission objectives in just 6 months. 
                                An extended mission phase will be considered to expand the science return.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-1 no-gutters">
                        <div className="borderLeft borderTop borderBottom" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                        <div className="borderRight" />
                        </div>
                        <div className="col-10 no-gutters">
                        <div className>
                            <br /><br />
                        </div>
                        </div>
                        <div className="col-1 no-gutters">
                        <div className="borderLeft borderTOp" />
                        </div>
                    </div>
                    </section>
                    <section id="team">
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6">
                        <div className="sectionHeader">
                            <h3>
                            <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                                <defs>
                                <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset={0} stopColor="#ff7f00" />
                                    <stop offset={1} stopColor="red" stopOpacity="0.702" />
                                </linearGradient>
                                </defs>
                                <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                            </svg>
                            PEOPLE                               
                            </h3>
                            <h2>
                            The Team
                            </h2>
                        </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                    <div className="row">
                        <div className="teamImage">
                        <div className="darken">
                            <div className="buttonContainer">
                            <a className="button" href="#">
                                MEET THE TEAM
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6">
                        <br />
                        <p>Ideally put a team photo of some kind above. Then say literally anything
                            relevant about the team here.
                        </p>
                        </div>
                    </div>
                </section>
                <section id="news">

                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                            <div className="borderRight" />
                        </div>
                        <div className="col-10 no-gutters">
                            <div className>
                                <br /><br />
                                <h3>
                                <svg className="gradRect" id="Component_3_1" data-name="Component 3 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={5} viewBox="0 0 30 5">
                                    <defs>
                                    <linearGradient id="linear-gradient" y1="0.5" x2="0.631" y2="0.5" gradientUnits="objectBoundingBox">
                                        <stop offset={0} stopColor="#ff7f00" />
                                        <stop offset={1} stopColor="red" stopOpacity="0.702" />
                                    </linearGradient>
                                    </defs>
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width={30} height={5} fill="url(#linear-gradient)" />
                                </svg>
                                NEWSROOM                              
                                </h3>
                            </div>
                        </div>
                        <div className="col-1 no-gutters">
                            <div className="borderLeft" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                            <div className="borderRight borderTop borderBottom" />
                        </div>
                        <div className="col-10 no-gutters">
                            <div className="borderTop borderBottom numbersContent">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <a href="https://www.nasa.gov/press-release/nasa-awards-venture-class-launch-services-demonstration-2-contract">
                                                <div className="newsBlock maidenLaunchArticle">
                                                    <div className="col-md-10 noPadding">
                                                        <div className="articleDarken">
                                                            <p className="small">Feb 12, 2021</p>
                                                            <h2 className="article">Firefly Aerospace and Exolaunch 
                                                            Announce Launch Services Agreement</h2>
                                                            <a className="articleLink" href="https://firefly.com/firefly-aerospace-and-exolaunch-announce-launch-services-agreement/">
                                                                firefly.com</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <a href="https://www.nasa.gov/press-release/nasa-awards-venture-class-launch-services-demonstration-2-contract">
                                                <div className="newsBlock contractArticle">
                                                    <div className="col-md-10 noPadding">
                                                        <div className="articleDarken">
                                                            <p className="small">Dec 11, 2020</p>
                                                            <h2 className="article">Firefly Black Awarded NASA Venture 
                                                            Class Launch Services Demonstration 2 Contract</h2>
                                                            <a className="articleLink" href="https://www.nasa.gov/press-release/nasa-awards-venture-class-launch-services-demonstration-2-contract">
                                                                nasa.gov</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 no-gutters">
                        <div className="borderLeft borderTop borderBottom" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-1 no-gutters">
                        <div className="borderRight" />
                        </div>
                        <div className="col-10 no-gutters">
                        <div className>
                            <br /><br />
                        </div>
                        </div>
                        <div className="col-1 no-gutters">
                        <div className="borderLeft borderTOp" />
                        </div>
                    </div>
                </section>
                <section className="links">
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-3">
                        <div className="logoDiv">
                            <svg className="logoExpose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.11 524.11"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1,.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-1{stroke-width:50px;}.cls-2{stroke-width:30px;}" }} /></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="cls-1" x="209.53" y="68.44" width="105.05" height="387.23" transform="translate(262.06 -108.55) rotate(45)" /><polyline className="cls-2" points="443.62 225.54 502.9 284.82 284.82 502.9 225.54 443.62" /><polyline className="cls-2" points="298.58 80.5 239.29 21.21 21.21 239.29 80.5 298.58" /></g></g></svg>
                            <br />
                            <h1 className="logo text-center">REAL</h1>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="references">
                            <h2 className="secondary">
                            Discover:
                            </h2>
                            <br />
                            <p>
                            <a className="exposeLink" href="mission/">REAL Mission Timeline &gt;</a>
                            </p><br />
                            <p>
                            <a className="exposeLink" href="science">The Science Behind REAL &gt;</a>
                            </p><br />
                            <p>
                            <a className="exposeLink" href="tech">REAL Satellite Tech &gt;</a>
                            </p><br />
                            <p>
                            <a className="exposeLink" href="team">The REAL team &gt;</a>
                            </p>
                        </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                </section>
                <section id="footer">
                <p className="small centerContent text-center">Copyright 2021 REAL.edu. All rights reserved.</p>
                </section>
            </div>
        );
    }
}

export default Home;