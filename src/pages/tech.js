/**
 * science.js
 * 
 * JSX element class that exports a react component containing the
 * website's tech page.
 * 
 * Siddharth Hathi, REAL, May 2021
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from "react-router-dom";
import '../css/style.css';

class Tech extends React.Component{

    // JSX html document
    render(){
        return(
            <div>
                <div class="techBannerImage">
                    <div class="darken">
                        <div class="headerText">
                            <h1 class="text-center detailPage">THE TECH</h1>
                        </div>
                    </div>
                </div>
                <div className="textBlock">
                    <svg xmlns="http://www.w3.org/2000/svg" className="underConstruction"viewBox="0 0 440.74 437.56"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M101.65,433c4.62-4.27,8.63-7.76,12.41-11.48q15.64-15.46,31.11-31.1c7-7.11,7.08-14.4.15-21.43q-13.14-13.35-26.51-26.5c-6.74-6.62-14.33-6.58-21.1.14C83.54,356.74,69.47,370.93,55,385.39c-2.31-3.24-2.63-6.72-3.25-10-10.54-55.15,41-102.68,95-87.58,3.24.91,5.35.67,7.84-1.88q18.67-19.12,37.81-37.82c2.65-2.59,2.73-3.89,0-6.55-19.69-19.42-39.2-39-58.75-58.6-5.77-5.77-5.87-9.07-.26-14.71Q149.71,152,166,135.75c5.63-5.59,9-5.49,14.74.25q29.16,29.15,58.27,58.37c2.55,2.57,4,3.29,7,.25,14.07-14.44,28.38-28.65,42.72-42.82,2.39-2.36,3.09-4.36,2.15-7.8C277.24,94.13,316,45.24,367.36,47.49A66.83,66.83,0,0,1,388,51.34c-.3,2.12-2.06,3-3.25,4.19C372,68.3,359.26,81,346.56,93.74c-8.05,8.08-8,15.14.09,23.23q12.56,12.56,25.12,25.07c7.28,7.21,14.5,7.25,21.79,0,13.14-13,26.17-26.14,39.27-39.21,3.67-3.67,3.9-3.59,5.26,1.44,15.06,55.71-36.56,107.82-92.46,93.16-4.73-1.24-7.46-.36-10.74,3-13.59,14-27.44,27.71-41.34,41.38-2.64,2.59-3.1,4-.17,6.94q51.09,50.73,101.89,101.72c6.07,6.07,6.11,9.37,0,15.47q-15.89,15.93-31.83,31.8c-5.93,5.91-9.1,5.84-15.07-.13q-50.88-50.91-101.73-101.86c-2.71-2.73-4.2-3-7-.08-12.33,12.65-24.86,25.1-37.45,37.49-2.41,2.37-3,4.37-2.11,7.82,7.12,28.82.79,54.44-20.67,75.1-21.15,20.37-46.62,25.82-74.91,18.09C104.07,434.07,103.64,433.84,101.65,433Z"/><path d="M100.69,182.49c-4.41.19-7.38-1.9-9.87-4.73-1.74-2-3.17-2.07-4.79,0a10.53,10.53,0,0,1-1.77,1.76c-3.81,3-5.76,5.56-.7,9.77,4.13,3.45,3.88,8.52.13,12.46q-10.86,11.39-22.24,22.28c-4.1,3.94-8.87,3.91-12.93-.11q-23-22.65-45.6-45.59c-3.87-3.92-3.88-9.09-.11-13q10.77-11.15,21.92-21.91c4.24-4.1,9.32-4.3,13.22.16,3.63,4.14,6,3.37,8.77-.37a14.44,14.44,0,0,1,2.48-2.46c1.71-1.39,2-2.48.31-4.39-7.44-8.55-7.24-12.4.69-20.32,18.73-18.74,37.94-37,56.08-56.33C127.64,37,153.83,22.56,182.7,12.23c23.4-8.37,47.41-13.3,72.43-12A131.64,131.64,0,0,1,271,2.3c2.94.51,3.86,1.8,3.28,4.75-1.67,8.53-9.23,16-17.93,17.23-16.17,2.38-32.21,5.15-47.24,12-21.91,10-34.25,26.34-34,51.05,0,4.83-.64,9.9.6,14.43,2,7.33-1.17,11.57-6,16.31-20.14,19.69-39.93,39.72-59.83,59.65C107.14,180.39,104.39,182.74,100.69,182.49Z"/></g></g></svg>
                    <p className="text-center muted">
                        This page is under construction
                    </p>
                </div>
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
                        <Link className="exposeLink" to="/mission">REAL's Mission &gt;</Link>
                        </p><br />
                        <p>
                        <Link className="exposeLink" to="/science">The Science behind REAL &gt;</Link>
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

export default Tech;