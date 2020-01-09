import '../../../node_modules/uikit/dist/css/uikit.min.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import '../../assets/css/flaticon.css';
import '../../assets/css/animate.min.css';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
 
class Navigation extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* Start Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                
                        <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#home"
                                    >
                                        Home
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#about"
                                    >
                                        About
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#team"
                                    >
                                        Team
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#blog"
                                    >
                                        Events
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#contact"
                                    >
                                        Audition
                                    </AnchorLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" data-uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <AnchorLink
                                                href="#home"
                                                offset={() => 100}
                                            >
                                                Home
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                offset={() => 100} 
                                                href="#about"
                                            >
                                                About
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#team"
                                            offset={() => 100}>Team</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#blog"
                                            offset={() => 100}>Events</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#contact"
                                            offset={() => 100}>Audition</AnchorLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Navbar Area */}
            </React.Fragment>
        );
    }
}
 
export default Navigation;