// Main Process
const { BrowserWindow, app } = require("electron");

console.log("Hello World");
function createWindow() {
  // Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform == "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
