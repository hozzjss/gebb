import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import { Connect } from "@stacks/connect-react";

// import { userSession } from "./user-session";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Connect
      authOptions={{
        appDetails: {
          name: "Gebb",
          icon: window.location.origin + "/wmno.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    > */}
    <App />
    {/* </Connect> */}
  </React.StrictMode>
);
