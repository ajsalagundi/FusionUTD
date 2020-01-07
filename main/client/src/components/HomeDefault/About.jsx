import React from 'react';
import signature from '../../assets/images/signature.png';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import one from '../../assets/images/1.png';
 
class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <section id="about" className="uk-about uk-dark about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Us</span>
                                    <h2>Best Music Group at UTD</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <p>We are a group whose sole purpose is to sing for charity. All profits received from our performances and other events, along with contributions from the public, are donated to a charity.</p>

                                    <div className="signature">
                                        <img src={signature} alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={about1} className="about-img1" alt="about-img" />
                                <img src={about2} className="about-img2" alt="about-img" />
                                <img src={one} className="shape-img" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;