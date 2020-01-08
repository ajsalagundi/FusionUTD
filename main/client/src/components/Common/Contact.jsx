import React from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
 
class Contact extends React.Component {
    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            voicePart: '',
            phone: '',
            song: '',
            day: 'Jan 20'
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/addmember', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                this.setState({ submitted: true })
            }
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.voicePart = '';
            formFields.song = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    voicePartChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.voicePart = e.target.value;
        this.setState({formFields});
    }

    songChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.song = e.target.value;
        this.setState({formFields});
    }

    dayChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.day = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert-success" uk-alert-success>
                    <Link to="#" onClick={this.onHideSuccess} className="uk-alert-close" uk-close="true"></Link>
                    <h3>Thank you</h3>
                    <p>We will connect you soon.</p>
                </div>
            );
        }
    }

    render(){
        return (
            <section id="contact" className="contact-area uk-dark uk-contact uk-section">

                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Audition</span>
                        <h2>I Want In</h2>
                    </div>

                    <div id="form" className="uk-grid uk-grid-match uk-grid-large">
                        <div className="item">
                            <form id="contactForm" onSubmit={this.onSubmit}>
                                <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                                    <div className="item uk-margin">
                                        <input
                                            type="text"
                                            className="uk-input"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={this.state.formFields.name}
                                            onChange={this.nameChangeHandler}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input
                                            type="email"
                                            className="uk-input"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={this.state.formFields.email}
                                            onChange={this.emailChangeHandler}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input
                                            type="text"
                                            className="uk-input"
                                            placeholder="Phone"
                                            value={this.state.formFields.phone}
                                            onChange={this.phoneChangeHandler}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input
                                            type="text"
                                            className="uk-input"
                                            name="voicePart"
                                            id="voicePart"
                                            placeholder="Voice Part"
                                            value={this.state.formFields.voicePart}
                                            onChange={this.voicePartChangeHandler}
                                            required={true}
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <textarea 
                                        name="message" 
                                        className="uk-textarea" 
                                        id="message" 
                                        cols="30" 
                                        rows="4" 
                                        placeholder="Song title, artist"
                                        value={this.state.formFields.song}
                                        onChange={this.songChangeHandler}
                                        required={true}
                                    />
                                </div>

                                <div id="audition" className="item uk-margin-top">
                                    <h5>Audition Date: </h5>
                                    <div>
                                        <label htmlFor="">
                                        <input
                                                type="radio"
                                                name="day1"
                                                value="Jan 20"
                                                onChange={this.dayChangeHandler}
                                                checked={this.state.formFields.day === 'Jan 20'}
                                        />
                                        Jan 20
                                        </label>
                                        <label htmlFor="">
                                        <input
                                            type="radio"
                                            name="day2"
                                            value="Jan 23"
                                            onChange={this.dayChangeHandler}
                                            checked={this.state.formFields.day === 'Jan 23'}
                                        />
                                        Jan 23
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="uk-button uk-button-default">Audition</button>
                            </form>
                            {this.successMessage()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;