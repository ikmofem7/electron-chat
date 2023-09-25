// Main Process
const { BrowserWindow, app, Notification } = require("electron");

console.log("Hello World");
function createWindow() {
  // Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      // will sanitize the code
      worldSafeExecuteJavaScript: true,
      // is a feature that ensures that both, your preload scripts and electon
      // internal logic run in seperate context
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  const notification = new Notification({
    title: "Hello World",
    body: "My test message",
  });
  notification.show();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform == "darwin") app.quit();
});
