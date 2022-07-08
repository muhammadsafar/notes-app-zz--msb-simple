import React from "react";

function Notif({ onClose }) {
  return (
    <div class="alert">
      <span class="closebtn" onClick={() => onClose()}>
        &times;
      </span>
      <span class="fas fa-exclamation-circle">
        <strong>Success </strong> <span id="messageAlerts">message alert</span>
      </span>
    </div>
  );
}

export default Notif;
