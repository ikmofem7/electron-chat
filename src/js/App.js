import React from "react";
import { ipcRenderer } from "electron";
const App = () => {
  const title = "Hello World ";
  const enhancedTitle = title + " - React App sample";
  console.log({ enhancedTitle });
  const handleNotification = () => {
    ipcRenderer.send("notify", "Custom message");
  };
  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={handleNotification}>Send Notification </button>
    </>
  );
};

export default App;
