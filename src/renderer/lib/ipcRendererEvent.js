import {ipcRenderer} from 'electron'

function setIpc () {
  console.log('nnnnnnnnnnnnnnnnnnjk')
  ipcRenderer.on('pong', (event, arg) => {
    console.log(`pong recibido - ${arg}`)
  })
}

function sendIpc () {
  ipcRenderer.send('ping', new Date())
}

module.exports = {
  setIpc,
  sendIpc
}
