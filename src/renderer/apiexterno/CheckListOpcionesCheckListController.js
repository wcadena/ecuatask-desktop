import axios from 'axios'
import fs from 'fs'
import crypto from 'crypto'
//import FormData from 'form-data'
import { AUTH_CONFIG } from '../oauth/auth0-variables'
import qs from 'qs'
import path from 'path'
//import pako from 'pako'

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
      .then(response => {
        // console.log(response)
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
        if (e.response.status === 502) {
          setTimeout(function () {
            const cloclc = new CheckListOpcionesCheckListController()
            cloclc.getequiponumeroserie(checklistid, opcioneschecklistid, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10)
          }, 5000)
        }
        return false
      })
  }
  setequipofile (file,no_serie) {
    var algorithm = 'sha256'

    var textToHash = JSON.stringify(file)
    var shasum2 = crypto.createHash(algorithm)
    shasum2.update(textToHash)
    var hash2 = shasum2.digest('hex')

    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists_upload_file'
    var accesToken1 = localStorage.getItem('access_token')
       
    var filenamejk = 'data'+path.sep+hash2 +'.txt'
    fs.writeFile( filenamejk, textToHash, err => {
      if (err) {
        console.error(err)
        return
      }
      const buf = Buffer(textToHash);

      var formData = {
        hash: hash2,
        tiposha: 'shasum2',
        uploadfile: buf.toString('base64'),
        no_serie: no_serie
      };

      var options3 = {
        method: 'POST',
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer '+accesToken1 ,
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(formData),
        url: urll
      };
      
      axios(options3).then(response => {
       console.log(response)      
      })
      .catch(error => {
        console.log(error)        
      })
    })
    
       
  }
  borrarOpcionCheclist (checklistid, opcioneschecklistid) {
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists_delete' + ''
    var accesToken1 = localStorage.getItem('access_token')
    var config = {
      headers: {
        Authorization: 'Bearer ' + '' + accesToken1
      }
    }
    var bodyParameters = {
      check_list_id: checklistid,
      opciones_check_list_id: opcioneschecklistid
    }
    axios.post(urll,
      bodyParameters,
      config
    )
      .then(response => {
        // console.log(response)
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
        if (e.response.status === 502) {
          setTimeout(function () {
            const cloclc = new CheckListOpcionesCheckListController()
            cloclc.borrarOpcionCheclist(checklistid, opcioneschecklistid)
          }, 4000)
        }
        return false
      })
  }
}

export default CheckListOpcionesCheckListController
