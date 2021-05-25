import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props){
    return(

        <div>
            <section className="navigation">
                {/* Image and text */}
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <Link className="navbar-brand" to="/">
                    {/* <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.93 534.87"><defs><style>.cls-1,.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-1{stroke-width:10px;}.cls-2{stroke-width:30px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="101.01" y="-1.61" width="104" height="307.67" transform="translate(153.63 -63.61) rotate(45.31)"/><rect class="cls-2" x="199.54" y="67.96" width="134.86" height="398.95" transform="translate(269.37 -110.44) rotate(45.31)"/><rect class="cls-1" x="328.93" y="228.81" width="104" height="307.67" transform="translate(385.1 -157.27) rotate(45.31)"/></g></g></svg> */}
                    {/* <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.15 517.23"><defs><style>.cls-1,.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-1{stroke-width:40px;}.cls-2{stroke-width:20px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="198.58" y="59.14" width="120" height="398.95" transform="translate(258.6 -107.09) rotate(45)"/><polyline class="cls-2" points="435.82 218.32 503.01 285.48 285.52 503.09 218.32 435.94"/><polyline class="cls-2" points="298.83 81.3 231.64 14.14 14.14 231.75 81.34 298.91"/></g></g></svg> */}
                    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.11 524.11"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1,.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-1{stroke-width:50px;}.cls-2{stroke-width:30px;}" }} /></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="cls-1" x="209.53" y="68.44" width="105.05" height="387.23" transform="translate(262.06 -108.55) rotate(45)" /><polyline className="cls-2" points="443.62 225.54 502.9 284.82 284.82 502.9 225.54 443.62" /><polyline className="cls-2" points="298.58 80.5 239.29 21.21 21.21 239.29 80.5 298.58" /></g></g></svg>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto navList">
                        <li class={`nav-item  ${
                            props.location.pathname === "/" ? "active" : ""
                            }`}>
                        <Link className="nav-link" to="/"><small>Home</small><span className="sr-only">(current)</span></Link>
                        </li>
                        <li class={`nav-item  ${
                            props.location.pathname === "/mission" ? "active" : ""
                            }`}>
                        <Link className="nav-link" to="/mission"><small>Mission</small></Link>
                        </li>
                        <li class={`nav-item  ${
                            props.location.pathname === "/tech" ? "active" : ""
                            }`}>
                        <Link className="nav-link" to="/tech"><small>Tech</small></Link>
                        </li>
                        <li class={`nav-item  ${
                            props.location.pathname === "/science" ? "active" : ""
                            }`}>
                        <Link className="nav-link" to="/science"><small>Science</small></Link>
                        </li>
                        <li class={`nav-item  ${
                            props.location.pathname === "/team" ? "active" : ""
                            }`}>
                            <Link className="nav-link" to="/team"><small>Team</small></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto navList">
                        <li className="nav-item active">
                        <a className="nav-link dataPortal" href="dataPortal/"><h3 className="dataPortal">DATA PORTAL</h3><span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </section>
        </div>

    )
}

export default withRouter(Navigation);