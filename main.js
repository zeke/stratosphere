const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  if (mainWindow) return

  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    alwaysOnTop: true
  })

  mainWindow.loadURL(`file:///${path.join(__dirname, 'index.html')}`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('activate', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})
