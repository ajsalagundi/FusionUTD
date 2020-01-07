import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from './components/Common/Preloader';
import Home from './components/Pages/Home';

class App extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    {this.state.loading ? <Preloader /> : ''}
                    <Route path="/" exact component={Home} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
