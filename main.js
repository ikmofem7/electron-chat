// Main Process
const { BrowserWindow, app, Notification, ipcMain } = require("electron");
require("dotenv").config();

const isDev = !app.isPackaged;
const path = require("path");
console.log("Hello World");
function createWindow() {
  // Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      // will sanitize the code
      worldSafeExecuteJavaScript: true,
      // is a feature that ensures that both, your preload scripts and electon
      // internal logic run in seperate context
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notify", (_, body) => {
  new Notification({ title: "Notification", body }).show();
});

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
