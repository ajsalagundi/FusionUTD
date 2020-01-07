import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import josh from '../../assets/images/josh.JPG';
import dyuthi from '../../assets/images/dyuthi.JPG';
import rica from '../../assets/images/rica.JPG';
import ananth from '../../assets/images/ananth.JPG';
import sunny from '../../assets/images/sunny.JPG';
import connor from '../../assets/images/connor.JPG';
import dhruva from '../../assets/images/dhruva.JPG';
import luca from '../../assets/images/luca.JPG';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 15,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <section id="team" className="team-area uk-dark uk-team uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Meet Our Experts</span>
                        <h2>Our Team</h2>
                        <div className="bar"></div>

                        <Link to="#" className="uk-button uk-button-default">View All</Link>
                    </div>
                </div>

                <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={josh} alt="team" />

                        <div className="team-content">
                            <h3>Joshua Gao</h3>
                            <span>President and Founder</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={dyuthi} alt="team" />

                        <div className="team-content">
                            <h3>Dyuthi Arella</h3>
                            <span>Vice President</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={rica} alt="team" />

                        <div className="team-content">
                            <h3>Rica Lellina</h3>
                            <span>Administrative Manager</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={ananth} alt="team" />

                        <div className="team-content">
                            <h3>Ananth Salagundi</h3>
                            <span>Treasurer</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={sunny} alt="team" />

                        <div className="team-content">
                            <h3>Sunny</h3>
                            <span>Supreme Lord Dictator</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={connor} alt="team" />

                        <div className="team-content">
                            <h3>Connor McMullen</h3>
                            <span></span>
                        </div>
                    </div>
                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={dhruva} alt="team" />

                        <div className="team-content">
                            <h3>Druva Mambapoor</h3>
                            <span></span>
                        </div>
                    </div>
                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={luca} alt="team" />

                        <div className="team-content">
                            <h3>Luca</h3>
                            <span></span>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}
 
export default Team;