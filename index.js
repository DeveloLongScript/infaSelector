const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }
const { app, BrowserWindow } = require('electron')
//handle setupevents as quickly as possible
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
  
    win.loadFile('./src/index.html')
  }

app.whenReady().then(() => {
    createWindow()
})