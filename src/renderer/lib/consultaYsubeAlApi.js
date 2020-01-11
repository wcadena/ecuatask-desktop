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
  consultaDiscos () {
    var equipodisk = store.state.data.diskLayout
    var equipodiskcantidd = store.state.data.diskLayout.length
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    var cheklisttt = AUTH_CONFIG.DISCOS
    for (var i = 0; i < equipodiskcantidd; i++) {
      var diskname = store.state.data.diskLayout[i].name
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipodisk[i].name, 'Name', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipodisk[i].type, 'Type', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipodisk[i].firmwareRevision, 'Firmware Revision', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipodisk[i].serialNum, 'Serial Num', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipodisk[i].size / 1000000000, 'Size', i, diskname, 'GB')
    }
  }
  consultaGraficos () {
    const cloclc = new CheckListOpcionesCheckList()
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    var cheklisttt = AUTH_CONFIG.GRAFICOS
    // tarjeta
    var tarjetfg = store.state.data.graphics.controllers
    var tarjetPorte = tarjetfg.length
    for (let i = 0; i < tarjetPorte; i++) {
      let diskname = tarjetfg[i].model
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, tarjetfg[i].model, 'Model', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, tarjetfg[i].vendor, 'Vendor', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, tarjetfg[i].vram, 'VRAM', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, tarjetfg[i].vramDynamic, 'VRAM Dynamic', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, tarjetfg[i].bus, 'Bus', i, diskname)
    }
    // monitor
    var pantalls = store.state.data.graphics.displays
    var pantallscantidad = pantalls.length
    for (let i = 0; i < pantallscantidad; i++) {
      let diskname = pantalls[i].model
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, pantalls[i].model, 'Model', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, pantalls[i].main, 'Main', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, pantalls[i].resolutionx, 'Resolution X', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, pantalls[i].resolutiony, 'Resolution Y', i, diskname)
      cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, pantalls[i].pixeldepth, 'Pixel Depth', i, diskname)
    }
  }
  consultaRedes () {
    var equipoBateri = store.state.data.battery
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    var cheklisttt = AUTH_CONFIG.REDES
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.ischarging, 'IsCharging')
  }
  consultaSO () {
    var equipoBateri = store.state.data.os
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    var cheklisttt = AUTH_CONFIG.SISTEMAS_OPERATIVOS
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.distro, 'Distro')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.arch, 'Arch')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.release, 'Release')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.hostname, 'Host Name')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoBateri.users, 'Users')
  }
  consultaSistemImformation () {
    var equipoSys = store.state.data
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    const cloclc = new CheckListOpcionesCheckList()
    var cheklisttt = AUTH_CONFIG.INFORMACION_DEL_SISTEMA
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.baseboard.manufacturer, 'Baseboard Manufacturer')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.baseboard.model, 'Baseboard Model')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.baseboard.serial, 'Baseboard Serial')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.baseboard.version, 'Baseboard Version')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.bios.vendor, 'Bios')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.system.manufacturer, 'System Manufacturer')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.system.serial, 'System Serial')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.system.model, 'System Model')
    cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, equipoSys.system.uuid, 'System UUID')
  }
  consultaProgramas () {
    const cloclc = new CheckListOpcionesCheckList()
    var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
    var cheklisttt = AUTH_CONFIG.PROGRAMAS_INSTALADOS // 71
    var progr1 = store.state.prrogra
    if (progr1) {
      let cantidprogra = progr1.length
      for (let i = 0; i < cantidprogra; i++) {
        setTimeout(function () {
          cloclc.getequiponumeroserie(equipodata.data.check_list_id, cheklisttt, progr1[i].name, progr1[i].version)
        }, 1000)
      }
    } else {
      alert('Aun no carga los programas.')
    }
  }
}

export default ConsultaYsube
