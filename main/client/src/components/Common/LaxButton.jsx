import React from 'react'
import ReactDOM from 'react-dom';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
 
class LaxButton extends React.Component {
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        lax.addElement(this.el)
    }
    
    componentWillUnmount() {
        lax.removeElement(this.el)
    }

    render(){
        return (
            <Link to="#" className="uk-button uk-button-default lax" data-lax-preset="driftLeft">Donate <i className="flaticon-right"></i></Link>
        );
    }
}
 
export default LaxButton;