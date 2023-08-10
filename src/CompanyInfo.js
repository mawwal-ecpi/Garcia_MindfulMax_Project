import React, { Component } from "react";
import usFlag from './usflag.jpeg';  

class CompanyInfo extends Component {
    render() {
        return (
            <div>
                <h2>Company Info</h2>
                
                <p>
                    Thank you for taking the time to learn more about us.
                     My journey began not as an entrepreneur, but as 
                     someone in pursuit of betterment.
                     <br></br> 
                     As a US veteran,
                      I faced countless challenges, both on the field 
                      and off. One of the greatest challenges was 
                      maintaining focus and energy throughout my 
                      daily life.
                </p>
                <br></br>
                <p>
                    Coffee became my go-to for a quick jump in energy.
                     While it did wonders in keeping me awake, it didn't
                      exactly provide the focus I needed. I wanted a 
                      solution, not a temporary fix. This longing ignited a 
                      journey - a journey to find the best natural 
                      alternative that could keep me energized, focused, 
                      and on track.
                </p>
                <br></br>
                <p>
                    At MindfulMax, our mission is to share the fruits 
                    of this journey with you. We believe in the power 
                    of natural supplements to enhance cognitive abilities.
                     Our products are a culmination of extensive research, 
                     personal experiences, and a deep-rooted desire to help 
                     others achieve their best mental performance.
                </p>
                <img src={usFlag} alt="US Flag" /> {}
            </div>
        );
    }
}

export default CompanyInfo;
