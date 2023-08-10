import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h2>GOT QUESTIONS?</h2>
        <p>
          Email us at:
        </p>
        <a href="mailto:costumer.support@wondersnmore.com">
          costumer.support@wondersnmore.com
        </a>
        <p>
          Or visit us at our Shopify Store
          <br></br>
          <a href="https://d808b1-2.myshopify.com/">WondersNMore</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;
