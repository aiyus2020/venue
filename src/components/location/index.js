import React from "react";

function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.016381000246!2d7.5185333000000005!3d9.0622697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bd3fe010485%3A0x7cc76e426b10689f!2sAso%20Rock%20Presidential%20Villa!5e0!3m2!1sen!2sng!4v1682163060546!5m2!1sen!2sng"
        width="100%"
        height="500px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="aso viila"
      ></iframe>

      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
}

export default Location;
