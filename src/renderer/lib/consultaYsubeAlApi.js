import { AUTH_CONFIG } from '../oauth/auth0-variables'
import store from '../store'
import CheckListOpcionesCheckList from '../apiexterno/CheckListOpcionesCheckListController'

class ConsultaYsube {
  consultaCpu () {
    var equipocpu = store.state.data.cpu
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.brand, 'Brand')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.cores, 'Cores')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.manufacturer, 'Manufacturer')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.model, 'Model')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.revision, 'Revision')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speed, 'Speed')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speedmin, 'Speed Min')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speedmax, 'Speed Max')
  }
  consultaBatery () {
    var equipoBateri = store.state.data.battery
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    var cheklisttt = AUTH_CONFIG.BATERIA
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.ischarging, 'Is Charging')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.maxcapacity, 'Max Capacity')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.currentcapacity, 'Current Capacity')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.percent, 'Percent')
  }
}

export default ConsultaYsube
