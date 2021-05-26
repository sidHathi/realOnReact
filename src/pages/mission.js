/**
 * mission.js
 * 
 * JSX element class that exports a react component containing the
 * website's mission page.
 * 
 * Siddharth Hathi, REAL, May 2021
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Link, withRouter } from "react-router-dom";
import '../css/style.css';
import spaceXDiagram from "../assets/spaceXDiagram.jpg";
import vanAllenDiagram2 from "../assets/vanAllenDiagram2.jpg";
import martianImage from "../assets/martianImage.jpg" ;
import satelliteIllustration from "../assets/satelliteIllustration.jpg";
import fireFlyMain from "../assets/ff_main.png";
import APL from "../assets/APL.png";
import MSU from "../assets/msu2.png";
import {openingAnimation, goalsAnimations, goalsAnimationsM, handleNavTransparent, configureStickyTimeline, displayStickyTimeline} from '../animations/animations';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SatDisplay from '../satelliteDisplay/satelliteDisplay'
gsap.registerPlugin(ScrollTrigger);


class Mission extends React.Component{

    // Activates necessary animations from animations module on page load
    componentDidMount(){
        openingAnimation();
        goalsAnimations();
        goalsAnimationsM();
        handleNavTransparent();
        configureStickyTimeline();
        displayStickyTimeline();
    }

    // JSX html document for the page
    render(){
        // Accepts hot changes to the modules displayed
        if (module.hot) {
            module.hot.accept()
        }
        return(
            <div>

                <section className="landing">
                <div className="missionBannerImage">
                    <div className="darken">
                    <div className="headerText">
                        <h1 className="text-center detailPage">THE MISSON</h1>
                    </div>
                    </div>
                </div>
                </section>
                <div className="textBlock">
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
                    ORBIT Visualization                              
                    </h3>
                     <p>
                    <small>
                    After launch, this visualization will show the REAL satellite’s position in real-time. 
                    Currently, it displays the orbit of another
                     satellite called FIREBIRD 4 as a placeholder. FIREBIRD 4 is an older cubesat that also investigates
                     electron dynamics in Earth's magnetosphere. It's orbital trajectory is similar to the one REAL will follow.
                    </small>
                    </p>
                </div>

                {/**
                 * Mounts the SatDisplay react class here
                 */}
                <div className="satContainer" id='sat'>
                    <SatDisplay />
                </div>


                <div className="onlyMobile mobileTimeline" id="timelineM">
                <div className="mobileTimeline-wrapper">
                    <p className="timeline-item-m" id="tl1">APRIL 2022 (T-0)</p>
                    <p className="timeline-item-m" id="tl2">T+21 DAYS</p>
                    <p className="timeline-item-m" id="tl3">MISSION END</p>
                    <p className="timeline-item-m" id="tl4">2025</p>
                </div>
                </div>
                <div className="noMobile timeline" id="timeline">
                <div className="row">
                    <div className="col-md-9" />
                    <div className="col-md-3">
                    <div className="line-border">
                        <p className="timeline-item" id="tl1">APRIL 2022 (T-0)</p>
                        <p className="timeline-item" id="tl2">T+21 DAYS</p>
                        <p className="timeline-item" id="tl3">MISSION END</p>
                        <p className="timeline-item" id="tl4">2025</p>
                    </div>
                    </div>
                </div>
                </div>
                <br />
                
                <section className="content">

                <div className="textBlock" id="section1">
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
                    STAGE 1                                
                    </h3>
                    <h2>
                    LAUNCH
                    </h2>
                </div>
                <img className="blogImage" src={fireFlyMain} />
                <div className="textBlock">
                    <p>
                    <small>
                    The REAL satellite will be launched in 2022 through NASA’s cubesat launch initiative.
                     Currently, REAL is set to launch on Firebird Aerospace’s Alpha rocket as part of NASA’s 
                     venture class demonstration 2 contract alongside other other small research satellites.
                    </small>
                    </p>
                    <br /><br />
                    <h3 className="text-center">LAUNCH DATE</h3>
                    <h1 className="secondary text-center">2022</h1>
                    <br /><br />
                    <p>
                    <small>
                    Prior to launching, the REAL satellite will undergo integration and performance testing 
                    at California Polytechnic State University in San Luis Obispo. After passing a comprehensive 
                    performance evaluation, the satellite will be packaged and prepared for launch.
                    During launch, the satellite will be enclosed in a CubeSat deployer. Its functionality will be temporarily 
                    inhibited by an RBF pin prior to installation per the CubeSat Specification and CSLI requirements.
                     Once the REAL satellite is released into orbit, it will begin initialization procedures. <br/><br/>After the required 
                     45 minute wait post deployment, the satellite will deploy its solar panels and release its antenna to 
                     establish contact with mission control. This will trigger the powering of the satellite’s data bus which provides
                      power, attitude determination and control, telemetry, and command and data handling.
                      Finally, the satellite will reorient itself to enter maximum power mode, in which its science 
                      collection instrument is offline, but its solar panels are situated so as to generate the maximum
                       possible amount of energy. From this position, the satellite will activate its UHF beacon, thereby
                        allowing the ground station at Montana State to identify and connect with it. 


                    </small>
                    </p>
                </div>
                <img className="blogImage" id="section2" src={spaceXDiagram} />
                <div className="textBlock">
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
                    STAGE 2                                
                    </h3>
                    <h2>
                    Commissioning
                    </h2>
                </div>
                <img className="blogImage" src={vanAllenDiagram2} />
                <div className="textBlock">
                    <p><small>Commissioning will begin once the Montana State University’s UHF ground station has acquired the REAL satellite. 

                Once an uplink is established, mission control will direct an orbital of the spacecraft’s systems via ground control. The results of these tests will be stored in the satellites engineering data. Ground control will then upload a set of positioning vectors so that the satellite can establish its telemetry. 

                After allowing 1-2 weeks to pass, during which any gasses trapped inside the satellite will be released, the satellite will gradually begin to power its data collection instrument. This powering will occur over the course of several days, as the instrument slowly builds up to its target voltage of ~2kV. The current will be monitored throughout this process to ensure the instrumentation remains safe.

                    </small></p>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <img src={APL} className="schoolLogoLarge" />
                                </div>
                            <div className="col-6">
                                <img src={MSU} className="schoolLogoLarge" />
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="textBlock">
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
                    STAGE 3                                
                    </h3>
                    <h2>
                    OPERATIONS
                    </h2>
                </div>
                <img className="blogImage" src={martianImage} />
                <div className="textBlock">
                    <p><small>Data transmission to and from the satellite is conducted from two ground-based 
                        locations in the US. The first is the Mission Operation Center (MOC), located at 
                        Montana State University’s Space Science and Engineering Laboratory (SSEL). The second is 
                        the Applied Physics Lab (APL) at Johns Hopkins University. MOC is largely responsible 
                        for telemetry, command and operational data, while the APL handles data downlinks from 
                        the satellite. These downlinks will typically consist of large quantities of data 
                        transmitted over S-Band frequencies.

                        <br /><br />

                        REAL commanding and health assessment are carried out by the MOC. These activities will 
                        typically occur once or twice per day when the spacecraft passes over Montana. The MOC will
                         uplink a list of time-tagged commands for the next three-day period. The MOC will also 
                         uplink a time-tagged list of transmit times that will be passed to the S-band radio. 

                        All command lists (pointing, transmit, instrument mode) will be updated each day.
                         The combined pointing commands, instrument active regions, and preprogrammed downlinks 
                         is well within the telemetry uplink limit (~75% margin) and the spacecraft command buffer. 
                         All time-tagged commands will be tagged with spacecraft mission-elapsed time.

                        REAL Data are downlinked autonomously, typically once per day, when the spacecraft passes over APL.
                         The transmit on/off times that were sent by the MOC are used by the spacecraft to begin and end the 
                         S-band transmission. No commands are sent by the APL ground station. 

                         <br/><br />

                        Prior to each pass over the MSU ground station, the operations team generates a list of commands 
                        and pointing vectors that cover a three day period. A separate list will be generated for each mode 
                        of operation (science mode, engineering mode, safe mode) -TBR. The list covers a three-day period, 
                        however the list will generally be updated every day. The three-day interval ensures that the spacecraft
                         will operate even in the event of a missed pass over MSU. 

                        After contact is established during a pass over MSU, a command is sent to the spacecraft to request
                         health and status data (TBR). Status data are used to determine the mode of operation for all remaining
                          orbits until the next MSU pass.

                    </small></p>
                    <h3 className="text-center" id="section3" >DE-ORBIT</h3>
                    <h1 className="secondary text-center" id="section4">2025</h1>
                    <br /><br />
                    <p>
                    <small>
                    REAL has no propulsion system thus relies on atmospheric drag and an appropriate 
                    orbit that meets the 25-year de-orbit requirement. If REAL is fully operational after the 
                    mission life, the solar panels can be oriented to maximize drag. However, de-orbit 
                    requirements will be met without assuming this capability. </small>
                    </p>
                </div>
                <img className="blogImage" src={satelliteIllustration} />
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
                        <br /><br />
                        <p>
                        <Link className="exposeLink" to="/science">The Science Behind REAL &gt;</Link>
                        </p><br />
                        <p>
                        <Link className="exposeLink" to="/tech">REAL Satellite Tech &gt;</Link>
                        </p><br />
                        <p>
                        <Link className="exposeLink" to="/team">The REAL team &gt;</Link>
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

if (module.hot) {
    module.hot.accept();
}

export default Mission;