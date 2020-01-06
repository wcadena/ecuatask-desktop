import {ipcRenderer} from 'electron'
import AuthService from '../oauth/AuthService'

function setIpc () {
  console.log('nnnnnnnnnnnnnnnnnnjk')
  ipcRenderer.on('pong', (event, arg) => {
    console.log(`pong recibido - ${arg}`)
    const auth = new AuthService()
    auth.getequiponumeroserie(localStorage.getItem('equipo3'), localStorage.getItem('access_token'))
  })
}

function sendIpc () {
  ipcRenderer.send('ping', new Date())
}

module.exports = {
  setIpc,
  sendIpc
}
