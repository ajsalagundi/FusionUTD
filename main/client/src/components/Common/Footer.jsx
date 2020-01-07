import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';
import mapImg from "../../assets/images/map2.png";
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area uk-dark uk-footer">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link to="index.html">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>

                                <p>The best music group at UTD.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>UTD</h3>
                                <div className="bar"></div>

                                <div className="location">
                                    <p>800 W Campbell Rd <br /> Richardson <br /> Texas <br /> United State</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="map-img">
                                <img src={mapImg} alt="map" />

                                <div className="location uk-location1">
                                    <Link to="https://www.utdallas.edu/" className="active">
                                        <div className="location-info">
                                            <h5>Dallas</h5>
                                            <span>800 W Campbell Rd</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                <div className="bar"></div>

                                <ul className="contact-info">
                                    <li><Link to="#">info@gunter.com</Link></li>
                                    <li><Link to="#">fax@gunter.com</Link></li>
                                    <li><Link to="#">+44 478 541 7452</Link></li>
                                </ul>
                                <ul className="social">
                                    <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                            <div className="item">
                                <p>© EnvyTheme. All Rights Reserved, 2019</p>
                            </div>

                            <div className="item">
                                <ul>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    </div>
                </div>

                <div className="footer-shape1">
                    <img src={footerShapeOne} alt="shape" />
                </div>
                <div className="footer-shape2">
                    <img src={footerShapeTwo} alt="shape" />
                </div>
            </footer>
        );
    }
}
 
export default Footer;