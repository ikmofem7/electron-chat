const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification: (expression) => {
      ipcRenderer.send("notify", message);
    },
  },
});
