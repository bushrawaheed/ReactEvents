import React from "react";
export default function Weather() {
  function alertButton() {
    alert("coming soon..");
  }
  return (
    <div>
      <h1>React Events</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new component called Weather which renders a "Current
        Temperature" button. Add the button here.
      </p>
      <div>
        {" "}
        <button type="submit">Current Temperature</button>
      </div>
      <h3>Challenge 2</h3>
      <p>
        When the button is clicked, alert "Coming soon..." Add the button here.
      </p>
      <div>
        {" "}
        <button type="submit" onClick={alertButton}>
          Current Temperature
        </button>
      </div>
    </div>
  );
}
