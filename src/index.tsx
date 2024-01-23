import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <span style={{ display: "block", textAlign: "center" }}>
      Base Website is Working!
    </span>
  </React.StrictMode>,
);
