import axios from 'axios'
import { AUTH_CONFIG } from '../oauth/auth0-variables'

class CheckListOpcionesCheckListController {
  getequiponumeroserie (checklistid, opcioneschecklistid, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
    if (typeof valor1 === 'undefined' || !valor1 || valor1 === '') {
      valor1 = '---'
    }
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists' + ''
    var accesToken1 = localStorage.getItem('access_token')
    var config = {
      headers: {
        Authorization: 'Bearer ' + '' + accesToken1
      }
    }
    var bodyParameters = {
      check_list_id: checklistid,
      opciones_check_list_id: opcioneschecklistid,
      valor1: valor1,
      valor2: valor2,
      valor3: valor3,
      valor4: valor4,
      valor5: valor5,
      valor6: valor6,
      valor7: valor7,
      valor8: valor8,
      valor9: valor9,
      valor10: valor10
    }
    axios.post(urll,
      bodyParameters,
      config
    )
      .then(resp => {
        console.log(resp)
      })
      .then(response => {
        console.log(response)
        return response
      }).catch(e => {
        console.log(e)
        console.log(e.response)
        if (e.response.status === 401) {
          alert(JSON.stringify(e.response.data.error))
        }
        if (e.response.status === 422) {
          alert(JSON.stringify(e.response.data.error))
        }
        return false
      })
  }
}

export default CheckListOpcionesCheckListController
