import React from 'react';
import DefaultNavigation from '../Navigation/DefaultNavigation';
import Banner from '../HomeDefault/Banner';
import SeperatedBar from '../Common/SeperatedBar';
import About from '../HomeDefault/About';
import Team from '../HomeDefault/Team';
import LatestNews from '../HomeDefault/LatestNews';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
 
class Home extends React.Component {
    render(){
        return (
            <React.Fragment>
                <DefaultNavigation />
                <Banner />
                <div style={
                    {
                        backgroundColor: 'rgb(20, 73, 54)',
                        height: '30px'
                    }
                }/>
                <SeperatedBar />
                <About />
                <div style={
                    {
                        backgroundColor: 'rgb(20, 73, 54)',
                        height: '30px'
                    }
                }/>
                <SeperatedBar />
                <Team />
                <div style={
                    {
                        backgroundColor: 'rgb(20, 73, 54)',
                        height: '30px'
                    }
                }/>
                <SeperatedBar />
                <LatestNews />
                <div style={
                    {
                        backgroundColor: 'rgb(20, 73, 54)',
                        height: '30px'
                    }
                }/>
                <SeperatedBar />
                <Contact />
                <div style={
                    {
                        backgroundColor: 'rgb(20, 73, 54)',
                        height: '30px'
                    }
                }/>
                <SeperatedBar />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Home;