import React from "react";
const { notificationApi } = electron;
const App = () => {
  const title = "Hello World ";
  const enhancedTitle = title + " - React App sample";
  const handleNotification = () => {
    notificationApi.sendNotification("Custom message");
  };
  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={handleNotification}>Send Notification </button>
    </>
  );
};

export default App;
