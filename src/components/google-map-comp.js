import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1804.3039817699225!2d55.338504!3d25.2501261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c398c2ab955%3A0x5b074f4957bdb1cc!2zRU5IIE1lZGlhIC0gRGlnaXRhbCBNYXJrZXRpbmcgQ29tcGFueSBpbiBEdWJhaSBVQUUgfCDYp9mE2KrYs9mI2YrZgiDYp9mE2LHZgtmF2Yog2K_YqNmK!5e0!3m2!1sen!2sae!4v1660111652042!5m2!1sen!2sae"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
