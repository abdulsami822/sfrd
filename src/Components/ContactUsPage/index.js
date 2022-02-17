import React from "react";

import "./index.css";

function ContactUsPage() {
  return (
    <div className="contact-us-container app-content">
      <div className="contact-form">
        <h1 className="contact-form-heading">Get in touch!</h1>
        <input type="text" className="contact-input" placeholder="Name" />
        <input type="email" className="contact-input" placeholder="Email" />
        <input
          type="phone"
          className="contact-input"
          placeholder="Mobile Number"
        />
        <input type="text" className="contact-input" placeholder="Message" />
        <button className="contact-button">Send</button>
      </div>
      <div className="contact-address-container">
        <p className="office-country">India Office</p>
        <p className="office-address">
          USN Edutech Private Limited <br />
          #16-2-753/A/1/1 <br /> 4th Floor, Sri Sri House <br /> R.B Colony,
          Dilsukhnagar <br /> Hyderabad - 500 060 <br /> Telangana, India.
        </p>
        <p className="office-support-contact">
          support@sfrd.in <br />
          +91 0987654321
        </p>
      </div>
    </div>
  );
}

export default ContactUsPage;
