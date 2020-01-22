import React from "react";
import "./About.sass"
const About = props => {
    return (
        <div className="container-fluid pr-3 pl-3 mt-5">
            <div className="row justify-content-start">
                <div className="col-5">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col title">
                                This is simple <strong>blind typing</strong> trainer
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col plain">
                                Touch type training can improve an individual's typing speed and accuracy dramatically.
                                Speeds <strong>average around 30-40 WPM</strong>, while a speed of 60-80 WPM
                                the approximate speed to keep up with one's thoughts. A Microsoft survey suggested that many managers
                                expect employees to be able to type at a <strong>minimum of 50 WPM</strong>. Professional career typists can <strong>exceed
                                100 WPM</strong> repeatedly and continuously (secretarial, data entry, etc.). Routine practice is required to maintain
                                a <strong>high typing speed and accuracy.</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col title mb-2">
                                Why I made this app?
                            </div>
                        </div>
                        <div className="row">
                            <div className="col plain mb-5">
                                I suppose there are a lot of blind typing apps around the internet. But I didnt find one with <strong>infinity
                                random training.</strong>  I think that is the best practice instead of typing the same words or letters.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col title">
                                <strong>Enjoy!</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About