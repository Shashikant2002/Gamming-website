import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.0531427956!2d76.81303823507241!3d28.643795373170963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1678096925874!5m2!1sen!2sin"
        style={{
          width: "100%",
          height: "70vh",
          border: "none",
          filter: "grayscale(50%) invert(100%) contrast(100%)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Delhi"
      ></iframe>
    </>
  );
};

export default Map;
