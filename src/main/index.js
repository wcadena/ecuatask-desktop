'use strict'

import { app, BrowserWindow, ipcMain, dialog } from 'electron'
// import cargaErrors from '../renderer/lib/cargaErrores'
const windowStateKeeper = require('electron-window-state')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function relaunch (win) {
  dialog.showMessageBox(win, {
    type: 'error',
    title: '.-Ecuatask-Desktop-.',
    message: 'Ocurrio un error inesperado, se reiniciara el aplicativo'
  }, () => {
    app.relaunch()
    app.exit(0)
  })
}

function setupErrors (win) {
  win.webContents.on('crashed', () => {
    relaunch(win)
  })
  win.on('unresponsive', () => {
    dialog.showMessageBox(win, {
      type: 'warning',
      title: '.-Ecuatask-Desktop-.',
      message: 'Un proceso esta tomando mucho tiempo, puede esperar o reiniciar el aplicativo manualmente.'
    })
  })
  process.on('uncaughtException', (err) => {
    console.log(err)
    relaunch(win)
  })
}
function createWindow () {
  /**
   * Win state keeper
   */
  let state = windowStateKeeper({
    defaultWidth: 500, defaultHeight: 650
  })
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    minWidth: 350,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // cargaErrors(mainWindow)
  setupErrors(mainWindow)
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    console.log('Hasta luego... cerrando')
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
ipcMain.on('ping', (event, arg) => {
  console.log(`se recibio ping - ${arg}`)
  event.sender.send('pong', new Date())
})

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
