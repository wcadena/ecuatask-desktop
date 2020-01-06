import { app, dialog } from 'electron'

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
  console.log('setupErrors---------------------------------------->')
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

module.exports = {
  setupErrors
}
