import React from "react";

export default function Forecast() {
  function alertForecast() {
    alert("Forecast feature is not ready yet");
  }
  return (
    <div>
      <h3>Challenge 3</h3>
      <p>
        Create a new component called Forecast which renders a link "See
        forecast". When clicking on it, alert "Forecast feature is not ready
        yet". Include the component here.
      </p>
      <a href="#" onClick={alertForecast}>
        See forecast
      </a>
    </div>
  );
}
