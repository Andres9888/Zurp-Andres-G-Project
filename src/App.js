import * as React from "react";
import * as API from "./api";

export default function App() {
  const userDetails = API.getUserDetails();
  console.log("🚀 ~ file: App.js ~ line 6 ~ App ~ userDetails", userDetails)
  
  return (
    <div>
      <h1>Your stuff here.</h1>
    </div>
  );
}
